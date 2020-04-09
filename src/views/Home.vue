<template>
  <div class="home">
    <div class="container">
      <center>
        <div class="row">
          <div class="col-sm-12">
            <div class="wrapper">
              <router-link slot="item-title" to="/stocks">
                <div class="card">
                  <h3><strong>Total Stocks</strong></h3>
                  <small> {{ stocks }}</small>
                </div>
              </router-link>
              <router-link slot="item-title" to="/customers">
                <div class="card">
                  <h3><strong>Total Customers</strong></h3>
                    <small> {{ stocks }}</small>
                </div>
              </router-link>
              <router-link slot="item-title" to="/invoice">
                <div class="card">
                  <h3><strong>Invoice</strong></h3>
                  <small> {{ stocks }}</small>
                </div>
              </router-link>
              <router-link>
                <div class="card">
                  <h3><strong>Orders</strong></h3>
                    <small> {{ stocks }}</small>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </center>
    </div>
  </div>
</template>
<script>
import database from "../database";
export default {
  data() {
    return {
      stocks: 0,
    };
  },
  methods:{
    count() {
      database.all("SELECT count(name) FROM STOCKS;", (err,data) => 
      {
        if (err) console.log(err);
          else 
          {
            this.stocks=data[0];
          }
      });
    }
  }
};
</script>

<style>
 .wrapper {
    display: flex;
    max-width: 900px;
    flex-wrap: wrap;
    padding-top: 12px;
    padding-left: 140px;
  }
  .card {
    box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
    max-width: 150px;
    margin: 12px;
    transition: .15s all ease-in-out;
  }
  small{
        font-size: 10px;
        padding: 4px;
  }
</style>
