import React, {useState} from 'react';
import axios from 'axios';                                       // reactの非同期通信を実現する
import SearchBar from './components/SearchBar';                  // 検索部分のコンポーネント
import RestaurantList from './components/RestaurantList';　　　　　// レストラン情報のコンポーネント

const App = () => {
  const [restaurants, setRestaurants] = useState([]);           //レストラン情報を格納するステート
  const ApiKey = process.env.REACT_APP_FOOD_SEARCH_APIKEY;      // ホットペッパーグルメのAPIキー 
  const onSearchSubmit = async(term) => {                       // async awaitで非同期処理を行う
    try{                                                        // tryは送信する内容
       const params = {
         key: ApiKey,
         keyword : term,                                     // termは検索したキーワード
       };
    //const response = await axios.get("https://api.gnavi.co.jp/RestSearchAPI/v3/",{params});  // awaitは受診する内容　axiosでこのURLを取得する
   const results = await axios.get("http://webservice.recruit.co.jp/hotpepper/gourmet/v1/",{params});    //レスポンス取得成功
   console.log(results);　　　　　　　　　　　                        //コンソールへの表示はまだ
 //  setRestaurants(results.shop);
  // if(results.shop.total === 0) {                            
 //  window.alert('お探しの店舗は見つかりませんでした。');
 //    }
   }catch{
     window.alert('店舗の検索に失敗しました。');　　　　　　　　　　　　　　　　　//レスポンス取得はできるが、店舗の検索に失敗する
   }
  };


  return(
    <div>
       <SearchBar onSubmit={onSearchSubmit}/>  
       <RestaurantList restaurants={restaurants}/>
    </div>
  );
};

export default App;