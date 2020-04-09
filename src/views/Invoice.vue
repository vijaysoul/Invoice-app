<template>
    <div class="invoice">
        <div class="container is-widescreen">
            <section>
                <b-tabs>
                    <b-tab-item class="table" label="NEW BILL">
                        <div class="row">
                            <div class="md-form form-inline">
                                <div class="form-group">
                                    <input type="text" class="form-control" v-on:keyup="keymonitor" v-model="id" placeholder="Invoice ID" size="7px">
                                    <input type="hidden" v-model="data.stockId">
                                </div>
                                <input type="hidden" v-model="data.decription">

                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Product Name" v-model="data.name" size="30px">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" v-model="data.price" placeholder="Price">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" v-model="data.quantity" placeholder="Quantity" size="7px">
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control"  v-model="data.gst" placeholder="GST" size="7px">
                                </div>
                                <!-- <div class="form-group">
                                    <select class="form-control">
                                        <option value="0">0%</option>
                                        <option value="5">5%</option>
                                        <option value="12">12%</option>
                                        <option value="18">18%</option>
                                        <option value="28">28%</option>
                                    </select>
                                </div> -->
                                <div class="form-group">
                                    <input type="text" class="form-control" :value="data.price*data.quantity" placeholder="Total" size="14px">
                                </div>
                                <button class="btn btn-dark" v-on:click="add(data)">ADD</button>
                            </div>
                            <br>
                            <hr>
                            <table class="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th class="text-center">ID</th>
                                        <th class="text-center">Products</th>
                                        <th class="text-center">Description</th>
                                        <th class="text-center">Rate</th>
                                        <th class="text-center">Quantity</th>
                                        <th class="text-center">GST</th>
                                        <th class="text-center">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="row in addOn" :key="row.name">
                                        <td>{{row.stockId}}</td>
                                        <td>{{row.name}}</td>
                                        <td>{{row.description}}</td>
                                        <td>&#x20B9; {{row.price}}</td>
                                        <td>{{row.quantity}}</td>
                                        <td></td>
                                        <td>&#x20B9; {{row.total}}</td>
                                        <td><button>x</button></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="total form-inline">
                               <strong>Total Amount: &#x20B9; {{total}}</strong> 
                            </div>
                        </div>
                        <hr>
                    <button class="btn btn-dark" v-on:click="add(data)">Invoice Generate</button>
                       {{addOn}}
                    </b-tab-item>
                    <b-tab-item label="INVOICE DETAILS">
                      <div class="col-sm-6">
                        <div class="md-form">
                          <input type="text" v-on:keyup="cusfind" class="form-control" placeholder="Invoice ID">
                        </div>
                    </div>
                        {{ stocks }}
                    </b-tab-item>
                </b-tabs>
            </section>
        </div>
    </div>
</template>
<script>
import database from "../database";
export default {
    data() {
        return {
            id: '',
            data: [],
            addOn: [],
            total: 0,
            stocks: [],
        };
    },
    mounted() {
        database.all("SELECT * FROM STOCKS", (err, data) => {
            if (err) console.log(err);
            else {
                console.log(data[0]);
                this.stocks = data;
            }
        });
    },
    methods: {
        keymonitor: function(event) {
            console.log(event.key);
            if (event.key == "Enter") {
                console.log(this.id);
                database.all("SELECT stockId,name,description,price,quantity,gst,total FROM STOCKS WHERE stockId=" + this.id, (err, data) => {
                    if (err) console.log(err);
                    else {
                
                        this.data = data[0];
                    }
                });
            }
        },
        add: function(data) {
            console.log(data);
            this.addOn.push(data);
            for (var i = 0; i < this.addOn.length; i++) {
                this.total=this.total+this.addOn[i].total;
            }
        },
       
        cusfind: function(){
             
        }
    } 
};

</script>

<style>
.form-inline{
   padding-left: 70px;
}
.total{
    padding-left: 760px;
    font-size: 26px;
      color: black;
}
</style>

// export default {
//    name: "Footer",
//    data() {
//       return {
//          input:{
//             subscribe : "",
//             name : "",
//             email: "",
//             phone: "",
//             msg: ""
//          } 
//       };
//    },
//    methods: {
//       subscribe() {
//          if(this.input.subscribe != "")
//          {
//             this.input.subscribe = "";
//             this.$toasted.show("Your Email Added to the subscriber list", { 
//                theme: "toasted-primary", 
//                position: "top-right", 
//                duration : 5000
//             });
//          }
//          else
//          {
//             this.$toasted.show("Please enter valid email address", { 
//                theme: "toasted-primary", 
//                position: "top-right", 
//                duration : 5000
//             });
//          }
//       },
//       message(){
//          if (this.input.name != "" || this.input.email != "" || this.input.phone != "" || this.input.msg != "") {
//             this.input.name = "";
//             this.input.email = "";
//             this.input.phone = "";
//             this.input.msg = "";
//             this.$toasted.show("Your inquery details sent to the list", { 
//                theme: "toasted-primary", 
//                position: "top-right", 
//                duration : 5000
//             });
//          }
//          else
//          {
//             this.$toasted.show("Please fillout the form completely.", { 
//                theme: "toasted-primary", 
//                position: "top-right", 
//                duration : 5000
//             });
//          }
//       }
//    }
// }
