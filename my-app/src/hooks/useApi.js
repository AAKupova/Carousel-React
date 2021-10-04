import { useState, useEffect } from "react";

export const useApi = () => {
  const [photos, setPhotos] = useState([]);

  const normalizePhotos = (dataPhoto) =>
    dataPhoto.map((data) => ({
      link: data.webformatURL,
      alt: data.type,
      id: data.id,
    }));

  useEffect(() => {
    fetch(
      "https://pixabay.com/api/?key=23618466-75f9e5272201b0214226958e7&q=black+animals&image_type=photo",
      {
        method: "GET",
      }
    )
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(new Error(`Ошибка: ${res.status}`));
        }
        return res.json();
      })
      .then((res) => setPhotos(normalizePhotos(res.hits)));
  }, []);

  return {
    photos,
  };
};

// function lastSurvivors(str) {
//   let arr = [...str];
//   const result = arr.reduce((acc, cur, index, arr) => {
//     if (cur.indexOf === -1) {
//       return acc;
//     } else {
//       arr.splice(index, 1);
//       arr.splice(cur.indexOf, 1);
//       acc.push(String.fromCodePoint(cur.codePointAt(0) + 1));
//       if (arr.length === 1) {
//         acc.push(arr[0]);
//       }
//       return acc;
//     }
//   }, []);
//   return result;
// }
// lastSurvivors("bbssaaa");
