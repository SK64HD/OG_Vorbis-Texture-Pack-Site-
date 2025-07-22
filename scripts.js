const texturePacks = [
  {
    name: "Blocky Texture Pack",
    image: "assets/textures/blocky.jpg",
    versions: [
      { version: "v1.0", downloadUrl: "assets/texturepacks/blocky_v1.0.zip" },
      { version: "v1.1", downloadUrl: "assets/texturepacks/blocky_v1.1.zip" }
    ]
  },
  {
    name: "Smooth Textures",
    image: "assets/textures/smooth.jpg",
    versions: [
      { version: "v2.0", downloadUrl: "assets/texturepacks/smooth_v2.0.zip" },
      { version: "v2.1", downloadUrl: "assets/texturepacks/smooth_v2.1.zip" }
    ]
  },
  // Add more texture packs here
];

function displayTexturePacks() {
  const texturePackContainer = document.getElementById("texture-packs");
  texturePackContainer.innerHTML = ''; // Clear current texture packs

  texturePacks.forEach(pack => {
    const packElement = document.createElement("div");
    packElement.classList.add("texture-pack");

    const packImage = document.createElement("img");
    packImage.src = pack.image;
    packElement.appendChild(packImage);

    const packName = document.createElement("h3");
    packName.textContent = pack.name;
    packElement.appendChild(packName);

    const versionList = document.createElement("ul");
    pack.versions.forEach(version => {
      const versionItem = document.createElement("li");

      const versionButton = document.createElement("button");
      versionButton.textContent = `Download ${version.version}`;
      versionButton.onclick = () => window.location.href = version.downloadUrl;

      versionItem.appendChild(versionButton);
      versionList.appendChild(versionItem);
    });

    packElement.appendChild(versionList);
    texturePackContainer.appendChild(packElement);
  });
}

function searchTexturePacks() {
  const searchTerm = document.getElementById("search").value.toLowerCase();

  const filteredTexturePacks = texturePacks.filter(pack => {
    return pack.name.toLowerCase().includes(searchTerm);
  });

  // Dynamically update the texture packs displayed
  const texturePackContainer = document.getElementById("texture-packs");
  texturePackContainer.innerHTML = ''; // Clear current texture packs

  filteredTexturePacks.forEach(pack => {
    const packElement = document.createElement("div");
    packElement.classList.add("texture-pack");

    const packImage = document.createElement("img");
    packImage.src = pack.image;
    packElement.appendChild(packImage);

    const packName = document.createElement("h3");
    packName.textContent = pack.name;
    packElement.appendChild(packName);

    const versionList = document.createElement("ul");
    pack.versions.forEach(version => {
      const versionItem = document.createElement("li");

      const versionButton = document.createElement("button");
      versionButton.textContent = `Download ${version.version}`;
      versionButton.onclick = () => window.location.href = version.downloadUrl;

      versionItem.appendChild(versionButton);
      versionList.appendChild(versionItem);
    });

    packElement.appendChild(versionList);
    texturePackContainer.appendChild(packElement);
  });
}

document.getElementById("search").addEventListener("input", searchTexturePacks);

// Initialize the page with all texture packs
displayTexturePacks();
