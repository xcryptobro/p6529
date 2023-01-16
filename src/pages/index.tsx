import { type NextPage } from "next";
import Head from "next/head";
import { useCallback, useEffect, useRef, useState } from "react";
import { pixelMap } from '../utils/pixels'

const backgroundIndicies = [
555, 531, 507, 482, 458, 433, 409, 385, 361, 337, 314, 290, 266, 243, 219, 195, 172, 149, 126, 103, 80, 81, 58, 59, 60, 85, 86, 111, 136, 161, 186, 211, 235, 259, 284, 308, 332, 357, 381, 405, 429, 453, 476, 499, 522, 545, 568,
554, 530, 506, 481, 457, 432, 408, 384, 360, 336, 313, 289, 265, 242, 218, 194, 171, 148, 125, 102, 79, 56, 57, 34, 35, 36, 61, 62, 87, 112, 137, 162, 187, 212, 236, 260, 285, 309, 333, 358, 382, 406, 430, 454, 477, 500, 523, 546, 569,
553, 529, 505, 480, 456, 312, 288, 264, 241, 217, 193, 170, 147, 124, 101, 78, 55, 32, 33, 10, 11, 12, 37, 38, 63, 88, 113, 138, 163, 188, 213, 237, 261, 286, 310, 334, 359, 383, 407, 431, 455, 478, 501, 524, 547, 570

]

const outlineIndicies = [556, 532, 508, 483, 459, 434, 410, 386, 362, 338, 315, 291, 267, 244, 220, 196, 173, 150, 127, 104, 105, 82, 83, 84, 109, 110, 
135, 160, 185, 210, 234, 258, 283, 307, 331, 356, 380, 404, 428, 452, 475, 498, 521, 544, 567, 566, 565,
558, 534, 510, 485, 461, 436, 412, 388, 364, 340, 317, 293, 246, 223, 200, 201, 202, 203, 204, 205, 206, 231, 305, 329, 354, 378, 402, 426, 450, 473, 496, 519, 518, 517, 540, 563, 562,
486, 462, 437, 413, 389, 365, 341, 353, 377, 401, 425, 449, 472, 495, 516, 539, 538, 438, 414, 390, 366, 342, 352, 376, 400, 424, 448, 515, 514,
270, 271, 272, 296, 320, 321, 322, 323, 299, 275, 276, 277, 253, 254, 255, 256, 280, 304, 328, 327, 326, 325, 301, 251, 250, 249, 248, 372, 373]

const hoodIndicies = [130, 207, 197, 179, 520, 316, 128, 387, 509, 282, 181, 151, 245, 176, 134, 108, 330, 355, 451, 268, 435, 339, 541, 156, 184, 257,
232, 209, 174, 198, 106, 177, 131, 182, 157, 543, 460, 557, 564, 533, 542, 497, 484, 474, 411, 154, 153, 199, 222, 132, 183, 233, 221, 155, 
129, 158, 208, 269, 292, 363, 180, 178, 306, 403, 379, 427, 281, 175, 152, 133, 159, 107]

const toneIndicies = [370, 536, 229, 318, 375, 225, 397, 463, 300, 368, 227, 511, 348, 247, 350, 561, 345, 513, 395, 488, 343, 252, 559, 295, 393, 347,
398, 224, 537, 369, 230, 487, 324, 351, 319, 535, 396, 226, 374, 294, 346, 371, 560, 344, 228, 394, 512, 349]

const shadowIndicies = [
439, 464, 489, 
367, 392, 417, 442, 467, 492, 
420, 445, 470,
423, 
391, 415, 416, 440, 441, 465, 466, 489, 490, 491,
418, 419, 443, 444, 468, 469, 493, 494, 
421, 422, 446, 447, 471,
399
]

const lensIndicies = [273, 278, 298, 303, 297, 302, 274, 279]

const Home: NextPage = () => {
  const miniRef = useRef<HTMLCanvasElement>(null);
  const lrgRef = useRef<HTMLCanvasElement>(null);

  const [frame, setFrame] = useState(0)

  const getRGB = (num: number) => {
    switch (num) {
      case 1: return [0, 0, 0]
      case 2: return [40, 27, 10]
      case 3: return [40, 27, 10]
      case 4: return [40, 27, 10]
      case 5: return [255, 255, 255]
      case 6: return [255, 255, 255]
      case 7: return [255, 255, 255]
      case 8: return [255, 255, 255]
      case 9: return [255, 255, 255]
      case 10: return [255, 255, 255]
    }
    return [230, 230, 230]
  }

  const colorIndex = useCallback((i: number, color: string) => {
      const mult = 17
      const ctx = lrgRef?.current?.getContext('2d')
      if (ctx) {
        ctx.fillStyle = color
        const x = i % 24
        const y = i < 24 ? 0 : Math.floor(i / 24)
        ctx.fillRect(x * mult, y * mult, 17, 17)
      }
    }, [])

  useEffect(() => {
    setTimeout(() => {
      const background = backgroundIndicies.length
      const outline = background + outlineIndicies.length
      const hood = outline + hoodIndicies.length
      const tone = hood + toneIndicies.length
      const shadow = tone + shadowIndicies.length
      const lens = shadow + lensIndicies.length

      if (frame < background) {
        colorIndex(backgroundIndicies[frame] as number, 'rgb(100, 128, 140)')
      } else if (frame >= background && frame < outline) {
        colorIndex(outlineIndicies[frame-background] as number, 'rgb(0, 0, 0)')
      } else if (frame >= outline && frame < hood) {
        colorIndex(hoodIndicies[frame-outline] as number, 'rgb(67, 67, 67)')
      } else if (frame >= hood && frame < tone) {
        colorIndex(toneIndicies[frame-hood] as number, 'rgb(209, 162, 108)')
      } else if (frame >= tone && frame < shadow) {
        colorIndex(shadowIndicies[frame-tone] as number, 'rgb(134, 105, 71)')
      } else if (frame >= shadow && frame < lens) {
        colorIndex(lensIndicies[frame-shadow] as number, 'rgb(112, 213, 209)')
      }
      setFrame(frame+1)
    }, 10)
  }, [frame, colorIndex])

  useEffect(() => {
    const mini = miniRef.current;
    const miniCtx = mini?.getContext("2d");
    if (miniCtx) {
      miniCtx.fillStyle = "#fefefe";
      miniCtx.fillRect(0, 0, 24, 24);
      const pixelData = miniCtx.getImageData(0, 0, 24, 24)
      const data = pixelData.data
      for (let i = 0; i < pixelMap.length; i++) {
        const pixelType = pixelMap[i]
        if (pixelType) {
          const rgb = getRGB(pixelType)
          data[i*4] = rgb[0] as number
          data[i*4+1] = rgb[1] as number
          data[i*4+2] = rgb[2] as number
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          const color = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
          colorIndex(i, color)
        }
      }
      miniCtx.putImageData(pixelData, 0, 0)
    }
  }, [colorIndex]);

  return (
    <>
      <Head>
        <title>Pixels of 6529</title>
        <meta
          name="description"
          content="Pixels of 6529 is an art project by xCryptoBro"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#ffffff] to-[#cecece]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Pixels of <span className="text-[hsl(280,100%,70%)]">6529</span>
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <canvas ref={miniRef} width={24} height={24} className='hidden' />
            <canvas ref={lrgRef} width={408} height={408} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
