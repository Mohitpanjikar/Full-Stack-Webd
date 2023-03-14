from PIL import Image, ImageDraw, ImageFont

def generate_book_cover(title, author, keywords):
    # Create an image with a solid background color
    cover = Image.new('RGB', (800, 1200), (230, 230, 230))

    # Draw the title and author on the cover
    draw = ImageDraw.Draw(cover)
    title_font = ImageFont.truetype('arial.ttf', 36)
    author_font = ImageFont.truetype('arial.ttf', 24)
    draw.text((20, 20), title, font=title_font, fill=(0, 0, 0))
    draw.text((20, 60), author, font=author_font, fill=(0, 0, 0))

    # Add keyword-related shapes or images to the cover
    for keyword in keywords:
        if keyword == 'adventure':
            draw.rectangle((500, 100, 750, 350), fill=(255, 165, 0))
        elif keyword == 'mystery':
            draw.ellipse((650, 400, 800, 550), fill=(0, 128, 128))
        elif keyword == 'romance':
            draw.polygon(((200, 800), (400, 900), (600, 800)), fill=(255, 0, 255))
        # Add additional keywords as needed

    # Save the generated cover to a file
    cover.save('book_cover.jpg')

# Example usage:
generate_book_cover("The Lost City", "John Doe", ["adventure", "mystery"])
