<template>
    <div class="home container is-widescreen">
        <section>
            <b-tabs>
                <b-tab-item class="table" label="STOCKS">
                     <input type="text" id="search" class="form-control" placeholder="Search Items.." style="width:200px">
                    <table class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th class="th-sm">ID</th>
                                <th class="th-sm">Name</th>
                                <th class="th-sm">Description</th>
                                <th class="th-sm">Price</th>
                                <th class="th-sm">Quantity</th>
                                <th class="th-sm">GST</th>
                                <th class="th-sm">Total</th>
                                <th class="th-sm">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="stock in stocks" :key="stock.id">
                                <td>{{ stock.stockId }}</td>
                                <td>{{ stock.name }}</td>
                                <td>{{ stock.description }}</td>
                                <td>&#x20B9; {{ stock.price }}</td>
                                <td>{{ stock.quantity }}</td>
                                <td>{{ stock.gst }}%</td>
                                <td>&#x20B9; {{ stock.total }}</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </b-tab-item>
                <b-tab-item label="ADD &amp; EDIT">
                </b-tab-item>
            </b-tabs>
        </section>
    </div>
</template>
<script>
import database from "../database";
export default {
  data() {
    return {
      stocks: [],
    };
  },
  mounted() {
        database.all("SELECT * FROM STOCKS", (err,data) => {
          if (err) console.log(err);
          else {
            console.log(data[0]);
            this.stocks=data;
          }
        });
  }
};
$(document).ready(function(){
  $("#search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("table td").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
</script>


<style>

</style>
