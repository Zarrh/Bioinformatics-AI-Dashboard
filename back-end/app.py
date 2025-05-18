from flask import Flask, request, jsonify, send_file, make_response, send_from_directory
from flask_cors import CORS
import torch
import torch.nn as nn
from PIL import Image
import io
import json
import os

from config import *

from brainTumorDiagnosis.CNN import BrainTumorCNN
from brainTumorDiagnosis.utils import *
from brainTumorDiagnosis.transforms import *

from pharmagenomic.encoding import encode_sample, idx2drug
from pharmagenomic.model import PharmaModel

# Load model
model_brain = BrainTumorCNN(num_classes=4)
model_brain.load_state_dict(torch.load("./brainTumorDiagnosis/model.pth", map_location=torch.device("cpu")))
model_brain.eval()

model_pharma = PharmaModel()
model_pharma.load_state_dict(torch.load("./pharmagenomic/trained_model.pth", map_location=torch.device('cpu')))
model_pharma.eval()

app = Flask(__name__)
CORS(app, expose_headers=["X-Prediction", "X-Actual"])


@app.route("/api/random-image", methods=['GET'])
def predict_brain_tumor():

  img_path, label = get_random_image("./data/Testing")

  img = Image.open(img_path).convert('RGB')  
  img_tensor = test_transform(img).unsqueeze(0)

  output = model_brain(img_tensor)
  predicted_class = output.argmax(dim=1).item()


  buf = io.BytesIO()
  img.save(buf, format="PNG")
  buf.seek(0)

  response = make_response(send_file(buf, mimetype='image/png'))
  response.headers["X-Prediction"] = str(list(label_map.keys())[predicted_class])
  response.headers["X-Actual"] = str(label)

  print(f"Prediction: {list(label_map.keys())[predicted_class]}")
  print(f"Actual: {label}")
  
  return response


@app.route('/api/predict', methods=['POST'])
def predict_pharmacon():
  data = request.json
  try:
    x_encoded, _ = encode_sample(data)
    x_tensor = torch.tensor([x_encoded], dtype=torch.float32)
    with torch.no_grad():
      output = model_pharma(x_tensor)
      pred_idx = torch.argmax(output, dim=1).item()
      return jsonify({"prediction": idx2drug[pred_idx]})
  except Exception as e:
    return jsonify({"error": str(e)}), 500

@app.route('/api/loss', methods=['GET'])
def get_loss_pharmacon():
  try:
    with open("./pharmagenomic/loss_log.json", "r") as f:
      losses = json.load(f)
    return jsonify({"losses": losses})
  except FileNotFoundError:
    return jsonify({"error": "Loss file not found"}), 404

@app.route('/api/confusion', methods=['GET'])
def get_confusion_pharmacon():
  try:
    with open("./pharmagenomic/prediction_vs_actual.json", "r") as f:
      data = json.load(f)
    return jsonify(data)
  except FileNotFoundError:
    return jsonify({"error": "Confusion matrix file not found"}), 404


@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_react(path):
  if path != "" and os.path.exists(os.path.join("dist", path)):
    return send_from_directory("dist", path)
  else:
    return send_from_directory("dist", "index.html")


if __name__ == "__main__":
  print(f"App running on: http://localhost:{PORT}")
  app.run(host="0.0.0.0", port=PORT)
