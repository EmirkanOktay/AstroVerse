export default function handler(req, res) {
    const boxes = [
        { id: 1, Name: "Astronomy Picture Of The Day", Description: "This place shares astronomical photos", BackgroundImage: 1, path: "astronomypictureoftheday" },
        { id: 2, Name: "News", Description: "This place shares latest Nasa news", BackgroundImage: 2, path: "News" },
        { id: 3, Name: "Images", Description: "This place shares latest Nasa photos", BackgroundImage: 3, path: "Images" },
        { id: 4, Name: "Videos", Description: "This place shares latest Nasa videos", BackgroundImage: 4, path: "Videos" },
        { id: 5, Name: "Asteroids", Description: "This place shares asteroid informations", BackgroundImage: 5, path: "Asteroids" },
        { id: 6, Name: "Photos Of Mars", Description: "This place shares latest photos of Mars", BackgroundImage: 6, path: "photoofmars" }
    ];

    res.status(200).json(boxes);
}
