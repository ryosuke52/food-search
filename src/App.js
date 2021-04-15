import React, {useState} from 'react';
import axios from 'axios';                                       // reactの非同期通信を実現する
import SearchBar from './components/SearchBar';                  // 検索部分のコンポーネント
import RestaurantList from './components/RestaurantList';　　　　　// レストラン情報のコンポーネント
//import Searchbar from './components/SearchBar';　　　　　　　　　　　　// 検索機能コンポーネント
import BackgroundImg from './rest-search-background-img.png';    // アプリのイメージ背景
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({                                   // UIを整える
   title: {
     fontSize: 90,
     color: 'white',
     textAlign: 'center',
     paddingTop: '250px',
     fontFamily: 'Kaushan Script',
     [theme.breakpoints.down('sm')]:{       //600px以下(スマホサイズになるとレイアウトが変化する)
      fontSize: 70,
      paddingTop: '190px',
     },
   },
   subtitle: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    paddingTop: '50px',
    fontFamily: 'Kaushan Script',
    [theme.breakpoints.down('sm')]:{             //600px以下(スマホ・タブレットサイズになるとレイアウトが変化する)
      fontSize: 20,
      paddingTop: '10px',
    },
  },
}));

const App = () => {
  const classes = useStyles();                                   // UIを整えるための準備
  const [restaurants, setRestaurants] = useState([]);           //レストラン情報を格納するステート
  const ApiKey = process.env.REACT_APP_FOOD_SEARCH_APIKEY;      // ホットペッパーグルメのAPIキー 
  const onSearchSubmit = async(term) => {                       // async awaitで非同期処理を行う
    try{                                                        // tryは送信する内容
       const params = {
         key : ApiKey,
         keyword : term,                                     // termは検索したキーワード
       };
    //const response = await axios.get("https://api.gnavi.co.jp/RestSearchAPI/v3/",{params});  // awaitは受診する内容　axiosでこのURLを取得する
   const results = await axios.get("http://webservice.recruit.co.jp/hotpepper/gourmet/v1/",{params});
   console.log(results);
   setRestaurants(results.shop);
   if(results.data.total === 0) {                            
   window.alert('お探しの店舗は見つかりませんでした。');
     }
   }catch{
     window.alert('店舗の検索に失敗しました。');
   }
  };


  return(
    <div>
       <SearchBar onSubmit={onSearchSubmit}/>  
       <style>{'body { background-image: url('+BackgroundImg+')}'}</style>       
       <style>{'body { background-size: cover}'}</style>
       <style>{'body { background-attachment: fixed}'}</style>
       <div className={classes.title}>Rest Search</div>
       <div className={classes.subtitle}>〜お店探しをもっとシンプルに〜</div>
       <RestaurantList restaurants={restaurants}/>
    </div>
  );
};

export default App;