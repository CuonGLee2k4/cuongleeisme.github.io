//song list
let All_song = [
    {
      name: "Thích Em Hơi Nhiều",
      path: "music/1.mp3",
      img: "https://i.ytimg.com/vi/faSVTByG0LQ/maxresdefault.jpg",
      singer: "Wren Evans"
    },
    {
      name: "ChillnFree | Anhs & Ems",
      path: "music/chillnfree.mp3",
      img: "https://avatar-ex-swe.nixcdn.com/song/share/2021/08/25/e/7/a/5/1629857858037.jpg",
      singer: "QNT"
    },
    {
      name: "Forget Me Now",
      path: "music/forget.mp3",
      img: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/4/b/1/6/4b1620e9ea2484a239b30e6536844181.jpg",
      singer: "Fishy"
    },
    {
      name: "Cưới Thôi",
      path: "music/cuoithoi.mp3",
      img: "https://data.chiasenhac.com/data/cover/145/144624.jpg",
      singer: "Bray"
    },
    {
      name: "Đường Tôi Chở Em Về",
      path: "music/dtcev.mp3",
      img: "https://i.ytimg.com/vi/TIFW6IAUqHY/maxresdefault.jpg",
      singer: "buitruonglinh"
    },
    {
     name: "Có Hẹn Với Thanh Xuân",
     path: "music/chvtx.mp3",
     img: "https://thegioidienanh.vn/stores/news_dataimages/thanhtan/072021/14/00/in_article/1550_GREYDPoster_CHVTX.jpg?rt=20210714001638",
     singer: "Monstar x Ryan"
    }
 ];
 
 
 
 /*tracks*/
 let tracks = document.querySelector('.tracks');
 
 //creating a list or generating Html
 for (let i = 0; i < All_song.length; i++) {
 
   let Html = ` <div class="song">
       <div class="img">
       <img src="${All_song[i].img}"/>
       </div>
       <div class="more">
       <audio src="${All_song[i].path}" id="music"></audio>
       <div class="song_info">
          <p id="title">${All_song[i].name}</p>
          <p>${All_song[i].singer}</p>
       </div>
       <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
       </div>
     </div>`;
 
   tracks.insertAdjacentHTML("beforeend", Html);
 };
 
 
 /*please follow all the rules so that you do not face any problem*/