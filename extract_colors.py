import sys
import os
from collections import Counter
from PIL import Image

def get_dominant_color(image_path, num_colors=3):
    try:
        image = Image.open(image_path)
        image = image.resize((150, 150))  # Resize for faster processing
        result = image.convert('P', palette=Image.ADAPTIVE, colors=num_colors)
        result = result.convert('RGB')
        main_colors = result.getcolors(150*150)
        
        # Sort by count
        sorted_colors = sorted(main_colors, key=lambda t: t[0], reverse=True)
        
        return [c[1] for c in sorted_colors]
    except Exception as e:
        print(f"Error processing {image_path}: {e}")
        return []

def rgb_to_hex(rgb):
    return '#{:02x}{:02x}{:02x}'.format(rgb[0], rgb[1], rgb[2])

images = [
    'src/assets/images/bireysel.png',
    'src/assets/images/cift.png',
    'src/assets/images/ebeveyn.png'
]

all_colors = []

print("Extracting colors...")
for img_path in images:
    if os.path.exists(img_path):
        print(f"Processing {img_path}...")
        colors = get_dominant_color(img_path, num_colors=5)
        for c in colors:
            print(f"Found: {rgb_to_hex(c)}")
            all_colors.append(c)
    else:
        print(f"File not found: {img_path}")
