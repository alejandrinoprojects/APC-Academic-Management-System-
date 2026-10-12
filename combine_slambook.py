# Helper script to combine slambook images into PDF
import sys
from PIL import Image
import os

first_5 = [
    r"C:/Users/Dean Alejandrino/.gemini/antigravity/brain/88568000-7aca-4dd2-a70d-cf40a987b064/.user_uploaded/media_1791534038257_d0120728.png",
    r"C:/Users/Dean Alejandrino/.gemini/antigravity/brain/88568000-7aca-4dd2-a70d-cf40a987b064/.user_uploaded/media_1791534071630_7fc8e704.png",
    r"C:/Users/Dean Alejandrino/.gemini/antigravity/brain/88568000-7aca-4dd2-a70d-cf40a987b064/.user_uploaded/media_1791534126990_b5c05d53.jpg",
    r"C:/Users/Dean Alejandrino/.gemini/antigravity/brain/88568000-7aca-4dd2-a70d-cf40a987b064/.user_uploaded/media_1791534336392_d4ca9fe8.png",
    r"C:/Users/Dean Alejandrino/.gemini/antigravity/brain/88568000-7aca-4dd2-a70d-cf40a987b064/.user_uploaded/media_1791534372611_0cc429d6.png"
]

def combine_to_pdf(all_images, output_pdf):
    pil_images = []
    for p in all_images:
        img = Image.open(p).convert("RGB")
        pil_images.append(img)
    
    if pil_images:
        first = pil_images[0]
        rest = pil_images[1:]
        first.save(output_pdf, save_all=True, append_images=rest, resolution=100.0)
        print("Successfully created:", output_pdf)

if __name__ == "__main__":
    print("Helper ready. Stored 5 images so far.")
