const nextMovie = (container, numberCards) => {
  container.current.scrollBy({
    left: (164 + 14) * numberCards,
    behavior: "smooth",
  });
};

const backMovie = (container, numberCards) => {
  container.current.scrollBy({
    left: (-164 - 14) * numberCards,
    behavior: "smooth",
  });
};

const currentMovies = (section, container) => {
  if (container.current) {
    container.current.scrollTo({
      left: 0,
    });
  }
};

export { nextMovie, backMovie, currentMovies };
