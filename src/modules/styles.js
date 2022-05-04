const addStyle = (styleString) => {
  const style = document.createElement("style");
  style.textContent = styleString;
  document.head.append(style);
};

export const loadStyles = () =>
  addStyle(`@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Poppins:wght@300;400;500;600&display=swap');

.hack.cardgroup {
	position: fixed;
	width: 250px;
	bottom: 24px;
	right: 24px;
	z-index: 1000;
}

.hack.card {
    color: #000;
    font-family: 'IBM Plex Mono', sans-serif;
    font-size: 14px;    
    box-shadow: 0 8px 12px 0 rgb(0 0 0 / 40%) !important;
    border-radius: 8px;
    background: #ffffff;
}

.hack.card.header {
    border-radius: 8px;
    margin-bottom: 4px;
    background: #3b4044;
    color: #fff;
    font-weight: bold;
    padding: 4px 8px;
    padding: 8px 12px;
}

.hack.card.header .small {
	margin-top: 2px;
	font-size: 12px;
  color: #ccc;
}

.main_card {
	height: 200%;
	padding: 8px 12px;
}`);
