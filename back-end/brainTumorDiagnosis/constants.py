import os

target_size = (224, 224)
num_classes = 4
categories = os.listdir('./data/Testing')
label_map = {
  'notumor': 0,        
  'glioma': 1,         
  'meningioma': 2,     
  'pituitary': 3       
}