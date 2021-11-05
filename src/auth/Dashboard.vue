<template>
    <div>
        <b-card class="mx-auto">
            <div>
                <b-container class="mt-4 mb-5">
                    <b-row>
                        <b-col class="text-center">
                            <h1>Support Tickets</h1>
                        </b-col>
                    </b-row>
                    <!-- Heading Table -->
                    <div>
                        <b-row class="w-80 mx-auto mt-4">
                            <b-col cols="5">
                                <h6 style="font-weight:bold">Subject</h6>
                            </b-col>
                            <b-col>
                                <h6 style="font-weight:bold">From</h6>
                            </b-col>
                            <b-col>
                                <h6 style="font-weight:bold">Last Replier</h6>
                            </b-col>
                            <b-col>
                                <h6 style="font-weight:bold">Details</h6>
                            </b-col>
                        </b-row>

                        <b-row class="w-80 mx-auto">
                            <b-col>
                                <div class="separator mb-3"></div>
                            </b-col>
                        </b-row>
                    </div>
                    <!-- 1 -->
                    <div>
                        <b-row class="w-80 mx-auto text-success">
                            <b-col cols="5">
                                <p>Completed all of my hours</p>
                            </b-col>
                            <b-col>
                                <p>Mary Tyler</p>
                            </b-col>
                            <b-col class="text-center">
                                <p>-</p>
                            </b-col>
                            <b-col>
                                <router-link to="./ticket-details" class="text-success">
                                    View Details
                                </router-link>
                            </b-col>
                        </b-row>

                        <b-row class="w-80 mx-auto">
                            <b-col>
                                <div class="separator mb-3"></div>
                            </b-col>
                        </b-row>
                    </div>
                    <!-- 2 -->
                    <div>
                        <b-row class="w-80 mx-auto text-success">
                            <b-col cols="5">
                                <p>Help please!</p>
                            </b-col>
                            <b-col>
                                <p>Pam Beasly</p>
                            </b-col>
                            <b-col class="text-center">
                                <p>-</p>
                            </b-col>
                            <b-col>
                                <router-link to="./ticket-details" class="text-success">
                                    View Details
                                </router-link>
                            </b-col>
                        </b-row>

                        <b-row class="w-80 mx-auto">
                            <b-col>
                                <div class="separator mb-3"></div>
                            </b-col>
                        </b-row>
                    </div>
                    <!-- 3 -->
                    <div>
                        <b-row class="w-80 mx-auto">
                            <b-col cols="5">
                                <p>What are my next steps?</p>
                            </b-col>
                            <b-col>
                                <p>Jessica Pearson</p>
                            </b-col>
                            <b-col class="text-center">
                                <p>Tod Whitman</p>
                            </b-col>
                            <b-col>
                                <router-link to="./ticket-details" class="">
                                    View Details
                                </router-link>
                            </b-col>
                        </b-row>

                        <b-row class="w-80 mx-auto">
                            <b-col>
                                <div class="separator mb-2"></div>
                            </b-col>
                        </b-row>
                    </div>
                    <!-- 4 -->
                    <div>
                        <b-row class="w-80 mx-auto text-muted">
                            <b-col cols="5">
                                <p>Completed all of my hours</p>
                            </b-col>
                            <b-col>
                                <p>Mary Tyler</p>
                            </b-col>
                            <b-col class="text-center">
                                <p>Tod Whitman</p>
                            </b-col>
                            <b-col>
                                <router-link to="./ticket-details" class="text-muted">
                                    View Details
                                </router-link>
                            </b-col>
                        </b-row>

                        <b-row class="w-80 mx-auto">
                            <b-col>
                                <div class="separator mb-2"></div>
                            </b-col>
                        </b-row>
                    </div>
                    <!-- 5 -->
                    <div>
                        <b-row class="w-80 mx-auto text-muted">
                            <b-col cols="5">
                                <p>Completed all of my hours</p>
                            </b-col>
                            <b-col>
                                <p>Mary Tyler</p>
                            </b-col>
                            <b-col class="text-center">
                                <p>Tod Whitman</p>
                            </b-col>
                            <b-col>
                                <router-link to="./ticket-details" class="text-muted">
                                    View Details
                                </router-link>
                            </b-col>
                        </b-row>

                        <b-row class="w-80 mx-auto">
                            <b-col>
                                <div class="separator mb-2"></div>
                            </b-col>
                        </b-row>
                    </div>
                </b-container>
            </div>
        </b-card>

    </div>
</template>

<script>
  export default {
    data() {
      return {
        fields:
          [{key: 'subject'},{key: 'from'}, {key:'assigned'}, {key:'last_replier', class: 'text-center'}, {key:'replies', class: 'text-center'}],

        items: [
          { subject: 'Completed Hours', from: 'Nancy Drew', assigned: 'Dave Smith', last_replier: '-'},
          { subject: 'Help Please', from: 'Milton Bradley', assigned: 'Charlie Sheen', last_replier: '-'},
          { subject: 'Where do I find my enrollments?', from: 'Troy Arnold', assigned: 'Dan Akroyd', last_replier: 'Tod Whitman'},
          { subject: 'What next?', from: 'Rachel Larson', assigned: 'Jane Doe', last_replier: 'Jane Doe'},
          { subject: 'How do I enroll?', from: 'Johnny Bronx', assigned: 'Tyler Jones', last_replier: 'Tyler Jones'},
          { subject: 'I finished!', from: 'Amy Potter', assigned: 'Tod Whitman', last_replier: 'Tod Whitman'},

      ],
      plans_list_header:
        [{key: 'plan', class: 'text-left'}, {key:'status', class: 'text-center'}, {key:'started', class: 'text-center'}, {key:'monthly_payment', class: 'text-center'}, {key:'balance', class: 'text-center'}],

      plans_list: [
        { plan: '#54321',
          status: '<span class="text-success">Active</span>',
          started: '1/1/2020',
          monthly_payment: '$300.00',
          balance: '<span class="text-danger">$4,983.34',
        },
        { plan: '#43215',
          status: '<span class="text-danger">Deffered</span>',
          started: '1/1/2020',
          monthly_payment: '$300.00',
          balance: '<span class="text-danger">$4,983.34',
        },
        { plan: '#32154',
          status: '<span class="text-success">Active</span>',
          started: '1/1/2020',
          monthly_payment: '$300.00',
          balance: '<span class="text-danger">$4,983.34',
        }
      ],

      billing_info: [
        {
          card_on_file: '************3453',
          something: '$10,000',
          another: '400',
          thing: '120',
          example: '10/1/2019',
          another_example: '$350.00',
        }
      ],

      trans_header:
        [{key: 'date', class: 'text-center'},{key:'amount', class: 'text-center'}, {key:'payment_method', class: 'text-center'}, {key:'payment_status', class: 'text-center'}, {key:'notes', class: 'text-center'}],

      transactions: [
        { date: '1/1/2020',
          amount: '$300.00',
          payment_method: 'Card',
          payment_status: '<i class="iconsminds-yes text-success sm-icon"></i>'
        },

        { date: '2/1/2020',
          amount: '$300.00',
          payment_method: 'Card',
          payment_status: '<i class="iconsminds-yes text-success sm-icon"></i>'
        },

        { date: '3/1/2020',
          amount: '$300.00',
          payment_method: 'Card',
          payment_status: '<i class="iconsminds-yes text-success sm-icon"></i>'
        },

        { date: '4/1/2020',
          amount: '$300.00',
          payment_method: 'Card',
          payment_status: '<i class="iconsminds-yes text-success sm-icon"></i>'
        },

        { date: '5/1/2020',
          amount: '$300.00',
          payment_method: 'Card',
          payment_status: '<i class="iconsminds-yes text-success sm-icon"></i>'
        },

        { date: '6/1/2020',
          amount: '$300.00',
          payment_method: 'Card',
          payment_status: '<i class="iconsminds-yes text-success sm-icon"></i>'
        },
      ],

       plan_details: [
         {
           plan_title: 'Plan 54321',
           plan_total: '$10,000',
           hours: '400',
           plan_term: '120',
           defer_date: '10/1/2019',
           monthly_charge: '$350.00',
           down_payment: '$500.00',
           total_paid: '$2,794.34',
           remaining_balance: '<span class="text-danger">$4,983.34</span>'
         }
       ],
      }
    }
  }
</script>

<style>
.btn-example {
    width: 60%;
}
</style>
