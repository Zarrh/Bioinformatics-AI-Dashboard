import os
import random

from .constants import *


def get_random_image(path):
  my_list = []
  for category in categories:
    category_path = os.path.join(path, category)
    for file_name in os.listdir(category_path):
      file_path = os.path.join(category_path, file_name)
      # Ensure we're only adding image files
      if os.path.isfile(file_path) and file_name.lower().endswith(('.png', '.jpg', '.jpeg')):
        my_list.append([file_path, category])

  random_item = random.choice(my_list)

  return random_item
