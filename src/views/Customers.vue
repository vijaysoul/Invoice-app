<template>
    <div class="home container is-widescreen">
        <section>
            <b-tabs>
                <b-tab-item class="table" label="CUSTOMERS">
                    <input type="text" class="form-control" placeholder="Search Customers.." style="width:200px">
                    <table class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone No</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="customer in customers" :key="customer.id">
                                <td>{{ customer.customerId }}</td>
                                <td>{{ customer.name }}</td>
                                <td>{{ customer.email }}</td>
                                <td>{{ customer.phone }}</td>
                                <td>{{ customer.address }}</td>
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
      customers: [],
    };
  },
  mounted() {
        database.all("SELECT * FROM CUSTOMERS", (err,data) => {
            this.customers=data;
        });
  }
};
</script>


<style>

</style>
