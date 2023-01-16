// 1 = Frown (1)
// 2 = Lip 1 (1)
// 3 = Lip 2 (1)
// 4 = Lip 3 (1)
// 5 = Lens (8)
// 6 = Shadow (32)
// 7 = Tone (48)
// 8 = Hood (72)
// 9 = Outline ()
// 10 = Background

const pixelMap = [
  10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 
  10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 
  10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 
  10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 
  10, 10, 10, 10, 10, 10, 10, 10, 9, 9, 8, 8, 8, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 
  10, 10, 10, 10, 10, 10, 10, 9, 8, 8, 8, 8, 8, 8, 8, 9, 10, 10, 10, 10, 10, 10, 10, 10, 
  10, 10, 10, 10, 10, 10, 9, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 10, 10, 10, 10, 10, 10, 10, 
  10, 10, 10, 10, 10, 9, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 10, 10, 10, 10, 10, 10, 
  10, 10, 10, 10, 9, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 8, 8, 8, 9, 10, 10, 10, 10, 10, 
  10, 10, 10, 10, 9, 8, 8, 9, 7, 7, 7, 7, 7, 7, 7, 9, 8, 8, 9, 10, 10, 10, 10, 10, 
  10, 10, 10, 10, 9, 8, 9, 7, 9, 9, 9, 9, 7, 9, 9, 9, 9, 8, 9, 10, 10, 10, 10, 10, 
  10, 10, 10, 9, 8, 8, 9, 9, 9, 5, 5, 9, 9, 9, 5, 5, 9, 8, 8, 9, 10, 10, 10, 10, 
  10, 10, 10, 9, 8, 9, 7, 7, 9, 5, 5, 9, 7, 9, 5, 5, 9, 9, 8, 9, 10, 10, 10, 10, 
  10, 10, 10, 9, 8, 9, 7, 7, 9, 9, 9, 9, 7, 9, 9, 9, 9, 9, 8, 9, 10, 10, 10, 10, 
  10, 10, 9, 8, 9, 9, 9, 7, 7, 7, 7, 7, 7, 7, 7, 7, 9, 9, 9, 8, 9, 10, 10, 10, 
  10, 10, 9, 8, 9, 9, 9, 6, 7, 7, 7, 7, 9, 9, 7, 7, 9, 9, 9, 8, 9, 10, 10, 10, 
  10, 10, 9, 8, 9, 9, 9, 6, 6, 7, 7, 7, 7, 7, 7, 6, 9, 9, 9, 8, 9, 10, 10, 10, 
  10, 10, 9, 8, 9, 9, 9, 6, 6, 6, 6, 6, 6, 6, 6, 6, 9, 9, 9, 8, 9, 10, 10, 10, 
  10, 10, 9, 8, 9, 9, 9, 6, 6, 6, 6, 2, 3, 4, 6, 6, 9, 9, 9, 8, 9, 10, 10, 10, 
  10, 10, 10, 9, 8, 9, 9, 7, 6, 6, 1, 6, 6, 6, 6, 6, 9, 9, 8, 9, 10, 10, 10, 10, 
  10, 10, 10, 9, 8, 9, 9, 7, 7, 6, 6, 6, 6, 6, 6, 9, 9, 8, 9, 10, 10, 10, 10, 10, 
  10, 10, 10, 10, 9, 8, 9, 7, 7, 7, 9, 9, 9, 9, 9, 9, 8, 9, 10, 10, 10, 10, 10, 10, 
  10, 10, 10, 10, 9, 8, 9, 7, 7, 7, 9, 9, 9, 8, 8, 8, 9, 10, 10, 10, 10, 10, 10, 10,  
  10, 10, 10, 10, 9, 8, 9, 7, 7, 7, 9, 9, 8, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10
];

const colors = {
  background: [100, 128, 140],
  outline: [0, 0, 0],
  hood: [67, 67, 67],
  tone: [209, 162, 108],
  shadow: [134, 105, 71],
  lens: [112, 213, 209],
};

export { pixelMap, colors }