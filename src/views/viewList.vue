<script setup>
import { onMounted, ref } from "vue";
import card from "../components/card.vue";
import { useViewListStore } from "../store/viewStore";
import cityListData from "../assets/data/cityList.json";

const store = useViewListStore();

const cityList = cityListData.map((item) => {
  return {
    cityCode: item.CityCode,
    cityName: item.CityName,
    cityEnName: item.City,
  };
});
const selectCity = ref("選擇地區");

const getSelectCityData = () => {
  if (selectCity.value === "選擇地區") {
    alert("請選擇地區");
    return;
  }
  store.setCityName(selectCity.value);
  console.log("city", selectCity.value);
  console.log("storeData", store.cityName);
  store.getData(selectCity.value);
};

onMounted(() => {
  store.getData();
});
</script>

<template>
  <div class="viewList">
    <div class="banner flex items-center"></div>
    <div class="max-w-[1200px] mx-auto pt-4 pb-10">
      <div
        class="flex justify-center items-center pb-8 px-5 md:justify-between"
      >
        <h2 class="text-[32px] text-[#188E6B] font-700 mr-5 md:text-[45px]">
          景點列表 {{ selectCity }}
        </h2>
        <div class="flex justify-center">
          <select
            name=""
            id=""
            class="w-[164px] rounded-10px py-2 px-3 border border-solid border-[#1Fb588] rounded-r-0 text-[#1Fb588] font-700"
            v-model="selectCity"
          >
            <option value="選擇地區" selected>選擇地區</option>
            <option
              :value="item.cityEnName"
              v-for="item in cityList"
              :key="item"
            >
              {{ item.cityName }}
            </option>
          </select>
          <button
            class="btn rounded-l-0 rounded-10px"
            @click="getSelectCityData"
          >
            查詢
          </button>
        </div>
      </div>
      <div
        class="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 xl:grid-cols-3"
      >
        <router-link
          v-for="data in store.viewData"
          :key="data.id"
          :to="`viewList/${data.id}`"
        >
          <card :cardData="data"></card>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang='scss'>
.viewList {
  .banner {
    background-image: url("../assets/images/tour-benner.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 72px;
  }
}

@media (min-width: 960px) {
  .viewList {
    .banner {
      height: 172px;
    }
  }
}

@media (min-width: 1024px) {
  .homeIndex {
  }
}
</style>

