from PIL import Image, ImageSequence

def cut_gif(input_path, output_path, n_frames):
  with Image.open(input_path) as im:
      frames = []
      for i, frame in enumerate(ImageSequence.Iterator(im)):
        if i >= n_frames:
          break
        frames.append(frame.copy())

      # Save the cut gif
      frames[0].save(
        output_path,
        save_all=True,
        append_images=frames[1:],
        loop=0,
        duration=im.info.get('duration', 100),
        disposal=2
      )

# Example usage
cut_gif("brain.gif", "brain1.gif", n_frames=150)
