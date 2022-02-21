export const rotateAnimation = (progress, start, nodes, during) => {
  if (progress >= during) {
    return;
  }
  nodes.forEach((node) => {
    node.style.transform = `rotate(${progress / 10}deg)`;
  });
  requestAnimationFrame((timestamp) =>
    RacingCarGameView.rotateAnimation(timestamp - start, start, nodes, during),
  );
};
