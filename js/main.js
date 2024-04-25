const buttonOnOff = document.querySelector(".onOff");
const screenTv = document.querySelector(".screenTv");
const homeBtn = document.querySelector(".homeBtn");
const nameChannel = document.querySelector(".nameChannel");
const currentTime = document.querySelector(".currentTime");
const volume = document.querySelector("#volume");
const imgHome = "../assets/MenuTv.png";
let currentChannelIndex = 0;

const channels = [
  {
    number: 1,
    name: "YouTube",
    url: "../assets/YouTube.png",
  },
  {
    number: 2,
    name: "Futbol Libre",
    url: "../assets/FutbolLibre.png",
  },
  {
    number: 3,
    name: "Plex",
    url: "../assets/Plex.png",
  },
  {
    number: 4,
    name: "Prime Video",
    url: "../assets/PrimeVideo.png",
  },
  {
    number: 5,
    name: "Toky Video",
    url: "../assets/TokyVideo.png",
  },
  {
    number: 6,
    name: "Stremio",
    url: "../assets/Stremio.png",
  },
];

const onOffTv = () => {
  if (screenTv.classList.contains("none")) {
    screenTv.classList.remove("none");
  } else {
    screenTv.classList.add("none");
  }
};

const goHome = () => {
  if (!screenTv.classList.contains("none")) {
    const imagen = document.querySelector(".channel");
    imagen.src = imgHome;
    nameChannel.textContent = "Home";
    currentChannelIndex = -1;
  }
};

const cambiarImagen = () => {
  const imagen = document.querySelector(".channel");
  const currentChannel = channels[currentChannelIndex];
  if (currentChannel) {
    imagen.src = currentChannel.url;
    nameChannel.textContent = currentChannel.name;
    currentTime.textContent = "";
  }
};

const channelUp = () => {
  currentChannelIndex = (currentChannelIndex + 1) % channels.length;
  cambiarImagen();
};

const channelDown = () => {
  currentChannelIndex =
    (currentChannelIndex - 1 + channels.length) % channels.length;
  cambiarImagen();
};

cambiarImagen();

const getChanell = (channel) => {
  const imagen = document.querySelector(".channel");
  const selectedChannel = channels.find(({ number }) => number === channel);

  if (selectedChannel) {
    imagen.src = selectedChannel.url;
    nameChannel.textContent = selectedChannel.name;
  }
};

const hideInfoTv = () => {};

let levelVol = 0;

const volUp = () => {
  const onTv = screenTv.classList.contains("none");
  if (levelVol < 10 && !onTv) {
    volume.style.display = "inline-block";
    levelVol++;
    volume.textContent = ` VOL ${levelVol.toString()}`;
  }
  if (!onTv) {
    setTimeout(() => {
      volume.style.display = "none";
    }, 2000);
  }
};

const volDwn = () => {
  const onTv = screenTv.classList.contains("none");
  if (levelVol > 0 && !onTv) {
    volume.style.display = "inline-block";
    levelVol--;
    volume.textContent = ` VOL ${levelVol.toString()}`;
  }
  if (!onTv) {
    setTimeout(() => {
      volume.style.display = "none";
    }, 2000);
  }
};
