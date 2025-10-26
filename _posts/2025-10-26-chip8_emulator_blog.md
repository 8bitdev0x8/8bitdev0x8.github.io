---
layout: post
title: "Building a CHIP-8 Emulator: My Journey Into Computer Architecture"
date: 2025-10-26 10:00:00 +0000
categories: blog
---

This has been a long-term idea in my mind. Ever since I started using a computer in my childhood, I’ve always wondered: **how could I build a computer from scratch?** And yes, I literally mean from scratch—using bare transistor circuits. 

After a long period of thinking and planning, I have finally decided to take the plunge. To start, I chose a simple, beginner-friendly design as my entry into the fascinating world of computer architecture.

This blog will be published in parts. All of my learning will be documented so that readers can get a clear idea of where to start. I come from a professional background as a software Engineer, working mostly at a higher level of abstraction. I am taking up this challenge to gain a deeper understanding of how computers work at the bare metal level.

So, what is **bare metal**? Simply put, a computer can only understand 1s and 0s. All the modern wizardry we see today—apps, operating systems, games—is ultimately built upon this foundation.

---

## My Emulator Journey

Lately, I’ve become very interested in emulators. I want to build a Game Boy Advance emulator for nostalgic reasons—my childhood was amazing with this tiny computer!

I figured that writing an emulator would be a perfect first step in this journey. After doing some research, I realized that the GBA is quite complex, with many instructions to implement. To start simpler, I discovered **CHIP-8**, an interpreter that is fairly easy to emulate and a great stepping stone toward more complex systems.

### Why CHIP-8?

CHIP-8 has a much smaller instruction set, making it beginner-friendly while still teaching important emulator concepts. Here are some key technical aspects of CHIP-8:

- **Display:** 64×32 pixels.
- **Color:** Monochrome.
- **Graphics:** Sprites are 8 pixels wide and can be 1–15 pixels tall.
- **Input:** Hex-based 16-key keypad.
- **Memory:** 4 KB total, where the first 512 bytes (0x000–0x1FF) are reserved for the interpreter.
- **Registers:** 16 8-bit general-purpose registers (V0–VF), with VF used as a flag for certain operations.
- **Index Register:** A 16-bit register (I) for memory addressing.
- **Program Counter (PC):** 16-bit, points to the current instruction in memory.
- **Stack:** Used to store return addresses for subroutines (up to 16 levels).
- **Timers:** Two 8-bit timers: a delay timer and a sound timer, which decrement at 60Hz.

Given its simplicity and educational value, I decided to build a CHIP-8 emulator/interpreter first.

---

## CHIP-8 Architecture Overview

The architecture of CHIP-8 is straightforward, making it ideal for beginner emulator projects:

1. **Memory Map:**
   - `0x000–0x1FF`: Reserved for the interpreter.
   - `0x200–0xFFF`: Program space for games and applications.

2. **Registers:**
   - 16 general-purpose 8-bit registers (V0–VF).
   - 16-bit index register (I) for pointing to memory locations.
   - 16-bit program counter (PC) that keeps track of the current instruction.

3. **Stack:**
   - Supports nested subroutine calls.
   - 16 levels deep, storing return addresses.

4. **Timers:**
   - **Delay timer:** Used for game logic and waits.
   - **Sound timer:** Plays a beep when nonzero; decrements at 60Hz.

5. **Input & Output:**
   - Hex-based 16-key keypad.
   - Monochrome display (64×32 pixels).
   - Draw operations are done by XOR-ing sprite pixels onto the display.

6. **Instruction Set:**
   - 35 opcodes, each 2 bytes long.
   - Simple but sufficient to create games like Pong, Tetris, and basic RPGs.

---
## Choosing the Language

I am familiar with C# and object-oriented programming, but I chose **C++** for this project. Why?

- **Portability:** C++ can be compiled for many platforms.
- **Minimal dependencies:** C++ strikes a balance between low-level control (for emulation accuracy), performance, portability, and structured code design, making it ideal for learning the fundamentals of computer architecture while building a real emulator.
- **Future plans:** My ultimate goal is to run this on a TTL logic system, which I hope to build in the future.

Additionally, I have plans to build a **compiler for the CHIP-8 emulator**, so programs can be written specifically for it.

---

## Technical References
For anyone interested in diving deeper into CHIP-8, here are some invaluable resources:

  **Cowgod's CHIP-8 Technical Reference:** A comprehensive guide covering memory, registers, keyboard layout, display, timers, and a detailed list of instructions. [Read here](http://devernay.free.fr/hacks/chip8/C8TECH10.HTM).

  **Tobias V. Langhoff's Guide:** A high-level guide explaining how to make a CHIP-8 emulator, focusing on what each part should do. [Read here](https://tobiasvl.github.io/blog/write-a-chip-8-emulator/).

  **Wikipedia CHIP-8 Article:** Overview of CHIP-8, its history, and technical details. [Read here](https://en.wikipedia.org/wiki/CHIP-8).

---

This is the start of my journey. CHIP-8 will serve as a stepping stone, teaching me the fundamentals of emulation, computer architecture, and low-level programming, all leading toward my bigger dream of building a computer from scratch.
