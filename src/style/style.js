export const arrowBtn = {
  position: 'absolute',
  zIndex: 999,
  top: '50%',
  border: '2px solid #000',
  color: '#000',
  '&.swiper-button-disabled': {
    opacity: 0.5,
    cursor: 'default',
  },
  '&.custom-prev': {
    left: { xs: 0, md: -30 },
    transform: 'translate(-50%, -50%)',
  },
  '&.custom-next': {
    right: { xs: 0, md: -30 },
    transform: 'translate(50%, -50%)',
  },
};

export const arrowBtnSlider = {
  position: 'absolute',
  zIndex: 999,
  top: '50%',
  border: '2px solid #000',
  color: '#000',
  '&.swiper-button-disabled': {
    opacity: 0.5,
    cursor: 'default',
  },
  '&.prev': {
    left: { xs: 0, md: -30 },
    transform: 'translate(-50%, -50%)',
  },
  '&.next': {
    right: { xs: 0, md: -30 },
    transform: 'translate(50%, -50%)',
  },
};

export const fxTitle = {
  ':after': {
    content: '""',
    display: 'block',
    bgcolor: 'primary.main',
    width: 70,
    height: 3,
    my: 2,
  },
};
