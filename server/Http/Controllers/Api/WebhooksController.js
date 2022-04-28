import RouteController from "../RouteController";
import Order from "../../../Models/Orders";
import Shop from "../../../Models/Shop";

const { PRODUCT_ID, SHOP } = process.env;

class WebhooksController extends RouteController {

  /**
   * Webhook on order created
   * @param  {} ctx
   */
   async orderCreated(ctx) {

    
    const productId = PRODUCT_ID;
    ctx.body = { status: 200, payload: "Incoming order" };
    const {
      id,
      name,
      line_items,
    } = ctx.request.body;

    const { shop } = ctx.request.query;


    const countPersonalizedOrders = line_items.filter(function(item){
      if (parseInt(item.variant_id) === parseInt(productId)) {
        return true;
      } else {
        return false;
      }
    });
 
    
    console.log("countPersonalizedOrders.length", countPersonalizedOrders.length);
    let persCardCount = countPersonalizedOrders.length;
    let countSameOrder = 0;
    for (let i = 0; i < line_items.length; i++) {
      let personalizedOrder = false;
      let properties = null;
      let propertiesObject = {};

      //Check if if personalized order product
      if(parseInt(line_items[i].variant_id) === parseInt(productId) ){
        properties = line_items[i].properties;
        personalizedOrder = true;
      }

      if(!personalizedOrder){
        if((line_items.length - 1) == i){
          ctx.body = { status: 200, payload: "This order doesn't contain personalized card" };
          return;
        }
      }

    if(properties === null){
      if((line_items.length - 1) == i){
        ctx.body = { status: 200, payload: "Line item properties are empty" };
        return;
      }
    }

    if( personalizedOrder == true){
      //map properties
      properties.forEach(element => {
      propertiesObject[element.name] = element.value;
    })

      try {
        const shopModel = await Shop.findByDomain(SHOP);
        /**
         * Create Quote Design
         */

        let orderName = name;
        if(countPersonalizedOrders.length > 1){
          orderName = name+"-"+persCardCount;
        }

          const newOrder = new Order({
            shop: shopModel,
            orderId: id,
            orderName: orderName,
            firstName: propertiesObject.FirstName,
            lastName: propertiesObject.LastName,
            street: propertiesObject._Street,
            apt: propertiesObject._Apt,
            city: propertiesObject._City,
            zip: propertiesObject._Zip,
            country: propertiesObject._Country,
            state: propertiesObject._State,
            deliverTo: propertiesObject.DeliverTo,
            designId: propertiesObject._Design,
            font: propertiesObject.Font,
            message: propertiesObject.Message,
            delivery: propertiesObject.Delivery,
            arriveByDate: propertiesObject.DeliveryDate,
          });

          const findOrder = await Order.find(
            { orderId: id,  message: propertiesObject.Message },
          )

          if(findOrder.length == 0){
            const orderModel = await newOrder.save();
          }

          persCardCount = persCardCount - 1;

          ctx.body = { status: 200, payload: "success" };
        } catch (error) {
          console.log("Error at checkoutCreate ",  error.message)
          ctx.body = { status: 500, payload: null, message: "Error at checkoutCreate " + error.message };
        }
      }

    };
    ctx.body = { status: 200 };
  }

   /**
   * Webhook on order created
   * @param  {} ctx
   */
    async appUninstalled(ctx) {
      console.log("appUninstalled webhook");
      try {

      } catch (error) {
        ctx.body = { status: 500, payload: null, message: "Error at checkoutCreate " + error.message };
      }
    }

}

module.exports = new WebhooksController();
