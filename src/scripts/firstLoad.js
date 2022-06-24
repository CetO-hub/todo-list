const firstLoad = () => {
  const isUserName = prompt("Please enter your name", "Lisa");
  const isUser = document.querySelector("#user");

  isUser.textContent = `Welcome, ${isUserName}`;
};

export default firstLoad;
