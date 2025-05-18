import pickle
import json
import numpy as np

with open('model.pkl', 'rb') as f:
  data = pickle.load(f)

def convert(obj):
  if isinstance(obj, np.ndarray):
    return obj.tolist()
  elif isinstance(obj, dict):
    return {k: convert(v) for k, v in obj.items()}
  elif isinstance(obj, list):
    return [convert(item) for item in obj]
  else:
    return obj

converted_data = convert(data)

with open('model.json', 'w') as f:
  json.dump(converted_data, f, indent=2)
