# Rainbow Climb — Project Memory

## Project Overview
Rainbow Climb is a generative vertical platformer for Android inspired by Rainbow Islands (Taito, 1987). The player climbs upward through infinite procedurally generated levels, shooting rainbows to create temporary platforms, while an auto-scrolling camera pushes them ever higher.

## Key Decisions Made

### Technology Stack
- **Engine**: libGDX 1.12+ with Kotlin
- **Build**: Gradle with Kotlin DSL
- **Physics**: Custom AABB (no Box2D — lighter, more predictable)
- **Audio**: Custom PCM synthesizer (no audio files needed)
- **Target**: Android API 24+ (primary), Desktop (dev/testing)
- **Virtual resolution**: 240x400 pixels

### Game Design
- **Rainbow mechanic**: Player shoots rainbow arcs that become temporary platforms (4 sec) and damage enemies. Ammo: max 3, regenerates 1/sec.
- **Auto-scrolling camera**: Forces player upward, death if you fall below
- **Difficulty scaling**: +0.2% compounding per level on scroll speed, enemy density, gap width, enemy speed. Level = every 50 platforms. ~2x base at level 350.
- **8 biomes**: Sky Garden, Cloud Kingdom, Neon City, Crystal Cave, Fire Ruins, Candy Land, Space Station, Haunted Forest — cycle in random order, no immediate repeats
- **6 enemy types**: Walker, Flyer, Hopper, Shooter, Bomber, Chaser (unlock progressively with difficulty)
- **5 power-ups**: Rainbow Boost, Double Jump, Shield, Slow Time, Magnet

### Music
- **Fully procedural** electronic/chiptune music (Option A chosen)
- Pentatonic minor scale, Markov chains for melody generation
- 4 tracks: drums (kick/snare/hihat), bass (square wave), lead (saw, Markov), pad
- Each biome defines tempo (110-140 BPM), mood, waveform preferences
- Adaptive: layers added/removed based on game intensity

### Art Style
- 2D pixel art, 32x32 base tile size
- Player: 16x24 px, Enemies: 16x16 px, Platforms: 32x8 px tiles
- Sources: OpenGameArt.org, itch.io, Kenney.nl (CC0/CC-BY)
- Biome = palette swap + tileset swap

### Monetization & Distribution
- Completely free, no ads, no in-app purchases
- "Buy Me a Coffee" donation link only
- Fully offline, no internet required
- APK target: < 15 MB

## Repository Structure
- **GitHub repo**: `fullo/rainbow-climb`
- **Code also available at**: `fullo/darumahq.it` branch `claude/generative-platform-game-4PpHe` under `rainbow-climb/` folder
- **Package**: `com.darumahq.rainbowclimb`

## Architecture
```
core/src/main/kotlin/com/darumahq/rainbowclimb/
├── RainbowClimbGame.kt       # Main game class
├── screen/                    # MenuScreen, GameScreen, GameOverScreen
├── world/                     # World, ChunkGenerator, Platform, Biome
├── entity/                    # Player, Rainbow, Enemy, Collectible
├── audio/                     # MusicEngine, Synthesizer, Sequencer, SfxManager
├── input/                     # TouchInputHandler
├── render/                    # GameRenderer, ParallaxBackground
└── util/                      # Constants, SeededRandom
```

## Current State
- Phase 1 (Core MVP) scaffold is complete with placeholder shape rendering
- All game systems implemented: physics, collision, chunk generation, music engine, input, screens
- No pixel art sprites yet — using colored shapes as placeholders
- Needs: sprite assets, Gradle wrapper jar, Android launcher icon

## Development Phases
1. **Core (MVP)** — ✅ Scaffolded
2. **Content** — Biomes, enemies, power-ups, platform types
3. **Audio** — Music engine + SFX (scaffolded, needs tuning)
4. **Polish** — UI, controls, persistence, performance
5. **Release** — Play Store, CI/CD, privacy policy
