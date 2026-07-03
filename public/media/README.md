# Media Assets

Place demo videos, GIFs, and screenshots here for your portfolio.

## Naming Convention

- FPS demo: `ragdoll-arena-demo.mp4` (or `.gif`)
- AI demo: `outpost-ai-demo.mp4`
- Animations: `fps-animations.mp4`
- General screenshots: `screenshot-*.png`

## Recommended Export Settings (Unreal Engine)

**Video (MP4)**
- Codec: H.264 (AVC)
- Resolution: 1920x1080 or 1280x720
- Bitrate: 5-8 Mbps for high quality, 2-3 Mbps for web
- Frame rate: 60 fps
- Audio: AAC, 128 kbps

**GIF**
- Resolution: 640x360 (for fast loading)
- Duration: 10-30 seconds
- Frame rate: 24-30 fps
- Use tools like ffmpeg to convert:
  ```bash
  ffmpeg -i input.mp4 -vf "fps=30,scale=640:-1" -f gif output.gif
  ```

## File Size Tips

- Target max 10-15 MB for videos (keep load times fast)
- Compress GIFs below 5 MB
- Use online tools or ffmpeg to optimize

## How to Use in Portfolio

Once uploaded, update the Next.js pages:
- `src/app/projects/page.tsx` → replace placeholder images with `/media/filename`
- `src/app/gamedev/fps/page.tsx` → replace with video player
- `src/app/gamedev/ai/page.tsx` → replace with AI clips

Example in TSX:
```jsx
<img src="/media/screenshot-gameplay.png" alt="gameplay" className="w-full rounded" />
<video src="/media/ragdoll-arena-demo.mp4" controls className="w-full rounded" />
```
