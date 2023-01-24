export const createGradient = (ctx, area) => {
  const gradient = ctx.createLinearGradient(
    0,
    area ? area.top : null,
    0,
    area ? area.bottom : null
  );

  gradient.addColorStop(1, "rgba(59,130,246,0)");
  gradient.addColorStop(0.5, "rgba(59,130,246,0.25)");
  gradient.addColorStop(0, "rgba(59,130,246,0.5)");

  return gradient;
};
