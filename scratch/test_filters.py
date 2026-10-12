import os
from PIL import Image, ImageOps, ImageFilter
import numpy as np

# Load real screen image122.png (Institutional Dashboard)
src_img = Image.open('scratch/docx_media/word/media/image122.png').convert('L')

# Method 1: Edge detection + inverted binary
edges = src_img.filter(ImageFilter.FIND_EDGES)
inv_edges = ImageOps.invert(edges)
inv_edges.save('scratch/test_filter_edges.png')

# Method 2: High pass / line art effect
# Subtract slightly blurred version to detect edges cleanly
blur = src_img.filter(ImageFilter.GaussianBlur(1))
diff = ImageOps.invert(ImageOps.autocontrast(ImageOps.invert(src_img)))

# Method 3: Simplified grayscale posterization with clean line enhancement
# Reduce colors to 4 levels: white (background), light gray (cards), dark gray (text), black (borders)
poster = ImageOps.posterize(src_img, 2)
poster.save('scratch/test_filter_poster.png')

print("Filtered images saved.")
