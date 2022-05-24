import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Search, Cart } from "react-bootstrap-icons";

const Amazskupage = () => {
  return (
    <>
      <div>
        {/* ...HeaderStarts... */}
        <div className={styles.header}>
          <div style={{ width: "10%" }}>
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              width={120}
              height={75}
              priority
            />
          </div>

          <div style={{ width: "12%" }}>
            <p className={styles.address}>
              Hello
              <br />
              <span style={{ fontWeight: "bold" }}>Select your address</span>
            </p>
          </div>

          {/* InputClassStarts */}
          <div className={styles.input}>
            <div>
              <select name="prod" id="prod" className={styles.dropdown}>
                <option value="clothing">Clothing & Accessories</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                style={{ width: "307%", height: "40px", border: "none" }}
              ></input>
            </div>
            <div
              style={{
                width: "49px",
                height: "40px",
                backgroundColor: "#e17a2b",
                marginLeft: "46.5%",
              }}
            >
              <Search
                style={{
                  marginLeft: "17px",
                  marginTop: "10px",
                  color: "black",
                }}
              />
            </div>
          </div>
          {/* InputClassClose */}

          <div style={{ width: "5%" }}></div>
          <div style={{ width: "10%" }}>
            <p className={styles.address}>
              Hello,Sign in
              <br />
              <span style={{ fontWeight: "bold" }}>Account & Lists</span>
            </p>
          </div>

          <div style={{ width: "7%" }}>
            <p className={styles.address}>
              Returns
              <br />
              <span style={{ fontWeight: "bold" }}>&Orders</span>
            </p>
          </div>

          <div style={{ width: "7%" }}>
            <Cart className={styles.cartImg} />
          </div>
        </div>
        {/* HeaderClose */}

        {/* NewHeaderStarts */}

        <div className={styles.newHeader}>
          <div style={{ width: "20%" }}>
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              width={230}
              height={170}
              priority
            />
          </div>

          {/* InputClassStarts */}
          <div className={styles.newInput}>
            <div>
              <select name="prod" id="prod" className={styles.newDropdown}>
                <option value="clothing">Clothing & Accessories</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                style={{
                  width: "443%",
                  height: "60px",
                  marginTop: "37px",
                  border: "none",
                }}
              ></input>
            </div>
            <div
              style={{
                width: "70px",
                height: "60px",
                backgroundColor: "#e17a2b",
                marginLeft: "61.5%",
                marginTop: "37px",
              }}
            >
              <Search
                style={{
                  width: "25px",
                  height: "60px",
                  marginLeft: "25px",
                  color: "black",
                }}
              />
            </div>
          </div>
          {/* InputClassClose */}

          <div style={{ width: "7%" }}>
            <Cart className={styles.cartStyling} />
          </div>
        </div>

        {/* NewHeaderClose */}

        {/* ClassNavStarts */}
        <div className={styles.nav}>
          <p>All</p>
          <p>Best Sellers</p>
          <p>Mobiles</p>
          <p>Customer Service</p>
          <p>Today's Deals</p>
          <p>Fashion</p>
          <p>Electronics</p>
          <p>Prime</p>
          <p>Home & Kitchen</p>
          <p>New Releases</p>
          <p>Amazon Pay</p>
          <p>Computers</p>
        </div>
        {/* ClassNavClose */}
      </div>

      {/* ClassNavbarStarts */}
      <div className={styles.navbar}>
        <p
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            marginLeft: "30px",
            marginTop: "13px",
          }}
        >
          Amazon Fashion
        </p>
        <p>Women</p>
        <p>Men</p>
        <p>Kids</p>
        <p>Bags & Luggage</p>
        <p>Sportswear</p>
        <p>Sales & Deals</p>
        <p style={{ marginTop: "11px", textAlign: "center" }}>
          <span className={styles.p}>30 DAY RETURNS</span>
          <br />
          Restrictions Apply
        </p>
      </div>
      {/* ClassNavbarClose */}

      {/* ClassBodyStarts */}
      <div className={styles.body}>
        <div className={styles.divOne}>
          <div className={styles.img}>
            <Image
              src="/assets/images/wallet.jpg"
              alt="wallet"
              width={30}
              height={30}
              layout="responsive"
              priority
            />
          </div>
          <div className={styles.wallet}>
            <Image
              src="/assets/images/wallet.jpg"
              alt="wallet"
              width={130}
              height={130}
              layout="responsive"
              priority
            />
          </div>
        </div>

        <div className={styles.divTwo}>
          <h2 style={{ fontWeight: "normal" }}>
            WILDHORN<sup>®</sup> Carter Leather Wallet for
            <br />
            Men (Black Croco)
          </h2>
          <p className={styles.color}>Visit the WildHorn Store</p>
          <p className={styles.color}>102 answered questions</p>
          <div style={{ display: "flex" }}>
            <div className={styles.bestSeller}>#1 Best Seller</div>
            <p
              className={styles.color}
              style={{ marginLeft: "5px", marginTop: "2px" }}
            >
              in Bags, Wallets and Luggage
            </p>
          </div>
          <p className={styles.size}>
            <span style={{ fontSize: "35px", color: "#CC0C39" }}>-70% </span>
            <sup className={styles.sup}>₹</sup>
            <span style={{ fontSize: "35px" }}>455</span>
          </p>
          <p className={styles.mrp}>
            M.R.P.: <strike>₹1,499.00</strike>
          </p>
          <p className={styles.font}>Inclusive of all taxes</p>
          <div className={styles.saveExtraMain}>
            <div style={{ borderBottom: "1px solid silver", display: "flex" }}>
              {/* <div className={styles.savingspng}>
                <Image
                  src="/assets/images/savings.png"
                  alt="savings"
                  width={30}
                  height={30}
                  layout="responsive"
                  priority
                />
              </div> */}
              <p className={styles.spanText}>
                <span className={styles.span}>Save Extra</span> with 2 offers
              </p>
            </div>
            <div style={{ borderBottom: "1px solid silver" }}>
              <p className={styles.emi}>
                <span style={{ fontWeight: "bold", color: "#B12704" }}>
                  No Cost EMI :
                </span>
                &nbsp;Avail No Cost EMI on select cards for order above ₹3000
                <span className={styles.color}>&nbsp;Details</span>
              </p>
            </div>
            <div>
              <p className={styles.emi}>
                <span style={{ fontWeight: "bold", color: "#B12704" }}>
                  Partner Offers :
                </span>
                &nbsp;Get GST invoice and save up to 28% on business purchases.
                <span className={styles.color}>
                  &nbsp;Sign up for free Details
                </span>
              </p>
            </div>
          </div>

          <div className={styles.imgs}>
            <div>
              <div className={styles.layout}>
                <Image
                  src="/assets/images/pay.png"
                  alt="pay"
                  width={40}
                  height={40}
                  layout="responsive"
                  priority
                />
              </div>
              <br />
              <p>Pay on Delivery</p>
            </div>
            <div className={styles.margin}>
              <div className={styles.layout}>
                <Image
                  src="/assets/images/returns.png"
                  alt="returns"
                  width={40}
                  height={40}
                  layout="responsive"
                  priority
                />
              </div>
              <br />
              <p>10 Days Returns</p>
            </div>
            <div style={{ marginLeft: "17px" }} className={styles.margin}>
              <div className={styles.layout}>
                <Image
                  src="/assets/images/delivered.png"
                  alt="delivered"
                  width={40}
                  height={40}
                  layout="responsive"
                  priority
                />
              </div>
              <br />
              <p>Amazon</p>
              <p>Delivered</p>
            </div>
            <div className={styles.marginNew}>
              <div className={styles.layout}>
                <Image
                  src="/assets/images/warranty.png"
                  alt="warranty"
                  width={40}
                  height={40}
                  layout="responsive"
                  priority
                />
              </div>
              <br />
              <p>6 Month</p>
              <p>Warranty</p>
            </div>
          </div>

          <div className={styles.font}>
            <p>
              <span className={styles.color}>New (2) from </span>
              <span style={{ color: "#B12704" }}>₹455.00 </span>
              <span style={{ fontWeight: "bold" }}>FREE Delivery</span> on first
              order.
            </p>
            <p className={styles.font}>
              <span style={{ color: "gray" }}>Colour :</span>
              <span style={{ fontWeight: "bold" }}> BLACK CROCO</span>
            </p>
          </div>

          <div className={styles.imgMainDiv}>
            <div className={styles.imgDiv} style={{ marginLeft: "0px" }}>
              <Image
                src="/assets/images/wallet.jpg"
                alt="wallet"
                width={40}
                height={40}
                layout="responsive"
                priority
              />
            </div>
            <div className={styles.imgDiv}>
              <Image
                src="/assets/images/wallet.jpg"
                alt="wallet"
                width={40}
                height={40}
                layout="responsive"
                priority
              />
            </div>
            <div className={styles.imgDiv}>
              <Image
                src="/assets/images/wallet.jpg"
                alt="wallet"
                width={40}
                height={40}
                layout="responsive"
                priority
              />
            </div>
            <div className={styles.imgDiv}>
              <Image
                src="/assets/images/wallet.jpg"
                alt="wallet"
                width={40}
                height={40}
                layout="responsive"
                priority
              />
            </div>
            <div className={styles.imgDiv}>
              <Image
                src="/assets/images/wallet.jpg"
                alt="wallet"
                width={40}
                height={40}
                layout="responsive"
                priority
              />
            </div>
            <div className={styles.imgDiv}>
              <Image
                src="/assets/images/wallet.jpg"
                alt="wallet"
                width={40}
                height={40}
                layout="responsive"
                priority
              />
            </div>
            <div className={styles.imgDiv}>
              <Image
                src="/assets/images/wallet.jpg"
                alt="wallet"
                width={40}
                height={40}
                layout="responsive"
                priority
              />
            </div>
            <div className={styles.imgDiv}>
              <Image
                src="/assets/images/wallet.jpg"
                alt="wallet"
                width={40}
                height={40}
                layout="responsive"
                priority
              />
            </div>
            <div className={styles.imgDiv}>
              <Image
                src="/assets/images/wallet.jpg"
                alt="wallet"
                width={40}
                height={40}
                layout="responsive"
                priority
              />
            </div>
          </div>
          <div className={styles.imgMainDiv} style={{ marginTop: "7px" }}>
            <div className={styles.imgDiv} style={{ marginLeft: "0px" }}>
              <Image
                src="/assets/images/wallet.jpg"
                alt="wallet"
                width={40}
                height={40}
                layout="responsive"
                priority
              />
            </div>
            <div className={styles.imgDiv}>
              <Image
                src="/assets/images/wallet.jpg"
                alt="wallet"
                width={40}
                height={40}
                layout="responsive"
                priority
              />
            </div>
            <div className={styles.imgDiv}>
              <Image
                src="/assets/images/wallet.jpg"
                alt="wallet"
                width={40}
                height={40}
                layout="responsive"
                priority
              />
            </div>
            <div className={styles.imgDiv}>
              <Image
                src="/assets/images/wallet.jpg"
                alt="wallet"
                width={40}
                height={40}
                layout="responsive"
                priority
              />
            </div>
            <div className={styles.imgDiv}>
              <Image
                src="/assets/images/wallet.jpg"
                alt="wallet"
                width={40}
                height={40}
                layout="responsive"
                priority
              />
            </div>
            <div className={styles.imgDiv}>
              <Image
                src="/assets/images/wallet.jpg"
                alt="wallet"
                width={40}
                height={40}
                layout="responsive"
                priority
              />
            </div>
            <div className={styles.imgDiv}>
              <Image
                src="/assets/images/wallet.jpg"
                alt="wallet"
                width={40}
                height={40}
                layout="responsive"
                priority
              />
            </div>
            <div className={styles.imgDiv}>
              <Image
                src="/assets/images/wallet.jpg"
                alt="wallet"
                width={40}
                height={40}
                layout="responsive"
                priority
              />
            </div>
            <div className={styles.imgDiv}>
              <Image
                src="/assets/images/wallet.jpg"
                alt="wallet"
                width={40}
                height={40}
                layout="responsive"
                priority
              />
            </div>
          </div>
          <div className={styles.imgMainDiv} style={{ marginTop: "7px" }}>
            <div className={styles.imgDiv} style={{ marginLeft: "0px" }}>
              <Image
                src="/assets/images/wallet.jpg"
                alt="wallet"
                width={40}
                height={40}
                layout="responsive"
                priority
              />
            </div>
            <div className={styles.imgDiv}>
              <Image
                src="/assets/images/wallet.jpg"
                alt="wallet"
                width={40}
                height={40}
                layout="responsive"
                priority
              />
            </div>
            <div className={styles.imgDiv}>
              <Image
                src="/assets/images/wallet.jpg"
                alt="wallet"
                width={40}
                height={40}
                layout="responsive"
                priority
              />
            </div>
            <div className={styles.imgDiv}>
              <Image
                src="/assets/images/wallet.jpg"
                alt="wallet"
                width={40}
                height={40}
                layout="responsive"
                priority
              />
            </div>
            <div className={styles.imgDiv}>
              <Image
                src="/assets/images/wallet.jpg"
                alt="wallet"
                width={40}
                height={40}
                layout="responsive"
                priority
              />
            </div>
            <div className={styles.imgDiv}>
              <Image
                src="/assets/images/wallet.jpg"
                alt="wallet"
                width={40}
                height={40}
                layout="responsive"
                priority
              />
            </div>
            <div className={styles.imgDiv}>
              <Image
                src="/assets/images/wallet.jpg"
                alt="wallet"
                width={40}
                height={40}
                layout="responsive"
                priority
              />
            </div>
            <div className={styles.imgDiv}>
              <Image
                src="/assets/images/wallet.jpg"
                alt="wallet"
                width={40}
                height={40}
                layout="responsive"
                priority
              />
            </div>
            <div className={styles.imgDiv}>
              <Image
                src="/assets/images/wallet.jpg"
                alt="wallet"
                width={40}
                height={40}
                layout="responsive"
                priority
              />
            </div>
          </div>

          <div className={styles.imgMainDiv} style={{ marginTop: "7px" }}>
            <div className={styles.imgDiv} style={{ marginLeft: "0px" }}>
              <Image
                src="/assets/images/wallet.jpg"
                alt="wallet"
                width={40}
                height={40}
                layout="responsive"
                priority
              />
            </div>
          </div>

          <div className={styles.table}>
            <table>
              <tr>
                <td>Material Type</td>
                <td>Leather</td>
              </tr>
              <tr>
                <td>
                  Number Of
                  <br />
                  Compartments
                </td>
                <td>2</td>
              </tr>
              <tr>
                <td>Warranty Type</td>
                <td>Manufacturer</td>
              </tr>
              <tr>
                <td>Closure Type</td>
                <td>Bi-Fold</td>
              </tr>
              <tr>
                <td>Form Factor</td>
                <td>Bi-Fold</td>
              </tr>
            </table>
          </div>

          <div className={styles.listItems}>
            <ul>
              <li>
                This Festive Season Bring a smile on his face by gifting him
                this absolutely Classy and Robust colored Wallet for Men. It
                comes in a perfect Matte Black Box and is the perfect gifting
                solution for Men and boys of all age groups on all
                occasions,like Diwali Gifts, Birthday Gifts, Puja gifts,
                Dhanteras Gifts , Wedding Gifts , Anniversary gifts etc.
              </li>
              <li>
                Keep all your essentials neat and organized in this stylish
                wallet. It is typically a bi-fold wallet.It has 9 in-build card
                slots, 2 currency slots, 2 secret compartment, a coin pocket and
                1 transparent windows for License or work ID of your driver. The
                most distinctive feature of this wallet is an inside zippered
                compartment which gives you ample space to keep important bills
                or notes.
              </li>
              <li>
                This compact wallet comes in convenient dimensions of 4.5 x 3.7
                x 0.7(L x W x H) inches which is not at all bulky. The size is
                just perfect to fit in your pocket with ease or to be kept in
                your travel bag. It is a perfect combination of size and space
                with numerous compartments for all your cards , bills, receipts
                and also a photo of your loved one.
              </li>
              <li>
                This wallet offers elite features with uncompromising style. The
                inside of the wallet is as important as the outside, hence we
                use top quality polyester fabric for the lining which is both
                soft to touch and extremely durable. NOTE:-Due to photographic
                effect there could be slight variation in color.
              </li>
              <li>NOTE: Product color may vary due to photographic effect.</li>
            </ul>
          </div>

          <div className={styles.save}>
            <div className={styles.saveImage}>
              <Image
                src="/assets/images/saveImage.jpg"
                alt="saveImage"
                width={120}
                height={120}
                layout="responsive"
                priority
              />
            </div>
            <div className={styles.saveText}>
              <p className={styles.fontSize}>Save 80%</p>
              <p style={{ marginTop: "-11px" }}>
                Hornbull Buttler Navy RFID Blocking
              </p>
              <p>Leather Wallet for Men Genuine Leather...</p>
              <p style={{ color: "gray" }}>
                ₹499.00 &nbsp;<strike>₹2,499.00</strike>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.divThree}>
          <div className={styles.rightDiv}>
            <p className={styles.sup}>
              <sup style={{ fontSize: "16px" }}>₹</sup>
              <span style={{ fontSize: "28px" }}>455</span>
              <sup style={{ fontSize: "17px" }}>00</sup>
            </p>
            <p className={styles.font}>
              <span className={styles.color}>FREE DELIVERY : </span>
              <span style={{ fontWeight: "bold" }}>Friday, May 6</span> on
            </p>
            <p className={styles.font} style={{ marginTop: "-5px" }}>
              first order.
            </p>
            <p className={styles.font}>
              Fastest delivery :
              <span style={{ fontWeight: "bold" }}> Tomorrow</span>
            </p>
            <p className={styles.font} style={{ color: "gray" }}>
              Order within 6 hrs and 55 mins
            </p>
            <p
              className={styles.color}
              style={{ fontSize: "17.5px", marginTop: "-5px" }}
            >
              Details
            </p>
            <p className={styles.color} style={{ fontSize: "17.5px" }}>
              Select delivery location
            </p>
            <h4 className={styles.inStock}>In stock.</h4>
            <p className={styles.font} style={{ marginTop: "-15px" }}>
              Sold by <span className={styles.color}>RetailEZ Pvt Ltd</span> and
            </p>
            <p style={{ marginTop: "-5px" }}>
              <span className={styles.color}>Fulfilled by Amazon</span>.
            </p>
            <div>
              <span className={styles.font}>Quantity: </span>
              <select
                name="quantity"
                id="quantity"
                className={styles.quantityDropdown}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className={styles.buttons}>
              <button
                className={styles.button}
                style={{ backgroundColor: "#f7f139" }}
              >
                Add to Cart
              </button>
              <button
                className={styles.button}
                style={{ backgroundColor: "#e17a2b" }}
              >
                Buy Now
              </button>
            </div>
            <p className={styles.color}>Secure transaction</p>
            <p className={styles.font}>Add gift options</p>
            <div className={styles.wishList}>Add to Wish List</div>
          </div>
          <div className={styles.rightDiv}>
            <p className={styles.font}>New (2) from</p>
            <p className={styles.font}>
              <span style={{ color: "#B12704" }}>₹455.00 </span>
              <span className={{ fontWeight: "bold" }}>FREE Delivery</span> on
            </p>
            <p className={styles.font}>first order.</p>
          </div>
          <div className={styles.rightDiv} style={{ paddingLeft: "0px" }}>
            <div className={styles.rghtDiv}>
              <span className={styles.font} style={{ fontWeight: "bold" }}>
                Other Sellers on Amazon
              </span>
            </div>
            <p className={styles.soldBy}>₹480.00</p>
            <p className={styles.soldByText}>
              <span style={{ fontWeight: "bold" }}>FREE Delivery</span> on first
              order. <span className={styles.color}>Details</span>
            </p>
            <p className={styles.soldByText}>
              Sold by : <span style={{ color: "black" }}>WildHorn India</span>
            </p>
          </div>
          <div className={styles.text}>
            <span>Have one to sell?</span>
            <div>Sell on Amazon</div>
          </div>
          <div className={styles.image}>
            <Image
              src="/assets/images/emi.jpg"
              alt="emi"
              width={253}
              height={250}
              layout="responsive"
              priority
            />
          </div>
        </div>
      </div>

      {/* ClassBodyClose */}

      <div style={{ paddingLeft: "30px" }}>
        <div className={styles.brands}>
          <h2>Brands related to this category on Amazon</h2>
          <p className={styles.font} style={{ color: "gray" }}>
            Sponsored
          </p>
          <div className={styles.sponsored}>
            <div style={{ display: "flex" }}>
              <div className={styles.rtsImage}>
                <Image
                  src="/assets/images/rts.jpg"
                  alt="rts"
                  width={150}
                  height={130}
                  layout="responsive"
                  priority
                />
              </div>
              <div className={styles.rtsLogo} style={{ paddingTop: "30px" }}>
                <div className={styles.newRtsLogo}>
                  <Image
                    src="/assets/images/rtsLogo.jpg"
                    alt="rtsLogo"
                    width={60}
                    height={40}
                    layout="responsive"
                    priority
                  />
                </div>
                <p className={styles.font}>Rts Credit Card Holder</p>
                <p className={styles.color}>Shop rts</p>
              </div>
            </div>

            <div className={styles.rtsImageNew}>
              <div className={styles.rtsImage}>
                <Image
                  src="/assets/images/range.jpg"
                  alt="range"
                  width={150}
                  height={130}
                  layout="responsive"
                  priority
                />
              </div>
              <div className={styles.rtsLogo}>
                <div className={styles.newRtsLogo}>
                  <Image
                    src="/assets/images/crossLogo.jpeg"
                    alt="crossLogo"
                    width={60}
                    height={40}
                    layout="responsive"
                    priority
                  />
                </div>
                <p className={styles.font}>Shop For Wide Range Cross Wallet</p>
                <p className={styles.color}>Shop Cross 50% Off Ends Today</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.instant}>
        <ul>
          <li>
            10% Instant Discount up to INR 1250 on RBL Bank Credit Card EMI
            Transactions. Minimum purchase of INR 5000.
            <span className={styles.color}>Here's how</span>
          </li>
          <li>
            10% Instant Discount up to INR 1000 on RBL Bank Credit Card Non-EMI
            Transactions. Minimum purchase of INR 5000.
            <span className={styles.color}>Here's how</span>
          </li>
          <li>
            10% Instant Discount up to INR 1000 on Kotak Bank Debit Card EMI
            Transactions. Minimum purchase of INR 5000.
            <span className={styles.color}>Here's how</span>
          </li>
          <li>
            10% Instant Discount up to INR 500 on Kotak Bank Debit Card Non-EMI
            Transactions. Minimum purchase of INR 5000.
            <span className={styles.color}>Here's how</span>
          </li>
          <li>
            10% Instant Discount up to INR 1500 on Kotak Bank Credit Card EMI
            Transactions. Minimum purchase of INR 5000.
            <span className={styles.color}>Here's how</span>
          </li>
          <li>
            10% Instant Discount up to INR 1250 on Kotak Bank Credit Card
            Non-EMI Transactions. <span className={styles.color}></span>Here's
            how
          </li>
          <li>
            10% Instant Discount up to INR 1000 on ICICI Bank Debit Card EMI
            Transactions. Minimum purchase of INR 5000.
            <span className={styles.color}>Here's how</span>
          </li>
          <li>
            10% Instant Discount up to INR 1500 on ICICI Bank Credit Card EMI
            Transactions. Minimum purchase of INR 5000.
            <span className={styles.color}>Here's how</span>
          </li>
          <li>
            10% Instant Discount up to INR 1250 on ICICI Bank Credit Card
            Non-EMI Transactions. Minimum purchase of INR 5000.
            <span className={styles.color}>Here's how</span>
          </li>
          <li>
            <span style={{ fontWeight: "bold" }}>Prime Savings</span> : Save 10%
            with Amazon Pay ICICI Bank Credit Card. Minimum purchase of INR
            5000. <span className={styles.color}>Here's how</span>
          </li>
          <li>
            No cost EMI available on select cards. Please check 'EMI options'
            above for more details.
            <span className={styles.color}>Here's how</span>
          </li>
          <li>
            Get GST invoice and save up to 28% on business purchases.
            <span className={styles.color}>Sign up for free Here's how</span>
          </li>
        </ul>
      </div>

      <div className={styles.box}>
        <h2>What is in the box?</h2>
        <ul>
          <li className={styles.font}>Coin Pocket</li>
        </ul>
        <h3 style={{ color: "#CC6600" }}>Product description</h3>
        <p className={styles.product}>
          This is a classic trifold wallet from WildHorn. The multiple
          compartments help keep everything you need organized and secure while
          looking chic and sophisticated. Hand stitched, dyed and aged to last a
          lifetime this classic wallet will show your style every time you pull
          it out. It features multiple credit card slots, two compartments for
          cash and one coin pocket. This wallet has been made out of top grain
          buffalo leather and it's a natural thing where colour variation is
          never under control. If you are using First time or have least
          knowledge about pure leather then don't worry about its colour
          variation. Pure leather belts or wallets get more beautiful on ageing.
          These are not PU which will contain shine on its surface.
        </p>

        <h2>From the manufacturer</h2>
        <div className={styles.manufacturer}>
          <div className={styles.brandImage}>
            <Image
              src="/assets/images/wallet.jpg"
              alt="wallet"
              width={60}
              height={60}
              layout="responsive"
              priority
            />
          </div>
          <div className={styles.brandText}>
            <h3>About Brand</h3>
            <p>
              {" "}
              This is a classic trifold wallet from WildHorn. The multiple
              compartments help keep everything you need organized and secure
              while looking chic and sophisticated. Hand stitched, dyed and aged
              to last a lifetime this classic wallet will show your style every
              time you pull it out. It features multiple credit card slots, two
              compartments for cash and one coin pocket. This wallet has been
              made out of top grain buffalo leather and it's a natural thing
              where colour variation is never under control. If you are using
              First time or have least knowledge about pure leather then don't
              worry about its colour variation. Pure leather belts or wallets
              get more beautiful on ageing. These are not PU which will contain
              shine on its surface.{" "}
            </p>
          </div>
        </div>

        <div className={styles.manufacturer}>
          <div className={styles.brandTextNew}>
            <h3>Stylish wallet for men</h3>
            <p>
              {" "}
              This wallet is made using leather for durability, and designed by
              craftsmen for great finish. This wallet completes your look and
              can go well with formal and semi-formal wear. This wallet can be
              used by men of all age group.{" "}
            </p>
          </div>
          <div className={styles.brandImageNew}>
            <Image
              src="/assets/images/wallet.jpg"
              alt="wallet"
              width={60}
              height={60}
              layout="responsive"
              priority
            />
          </div>
        </div>

        <div className={styles.compact}>
          <div className={styles.compactDiv}>
            <div className={styles.compactImage}>
              <Image
                src="/assets/images/wallet.jpg"
                alt="wallet"
                width={60}
                height={60}
                layout="responsive"
                priority
              />
            </div>
            <h3>Compact yet Spacious</h3>
            <ul>
              <li>2 currency slots</li>
              <li>2 secret compartment</li>
              <li>1 coin pocket</li>
              <li>
                1 transparent windows for License or work ID of your driver
              </li>
            </ul>
          </div>

          <div className={styles.compactDiv}>
            <div className={styles.compactImage}>
              <Image
                src="/assets/images/wallet.jpg"
                alt="wallet"
                width={60}
                height={60}
                layout="responsive"
                priority
              />
            </div>
            <h3>Inner feature</h3>
            <p>
              {" "}
              This wallet offers elite features with uncompromising style. The
              inside of the wallet is as important as the outside, hence we use
              top quality polyester fabric for the lining which is both soft to
              touch and extremely durable. NOTE:-Due to photographic effect
              there could be slight variation in color.{" "}
            </p>
          </div>

          <div className={styles.compactDiv}>
            <div className={styles.compactImage}>
              <Image
                src="/assets/images/wallet.jpg"
                alt="wallet"
                width={60}
                height={60}
                layout="responsive"
                priority
              />
            </div>
            <h3>Convenient to keep</h3>
            <p>
              {" "}
              Convenient to carry and keep. The wallet is easy to carry, you can
              hold it in your hand naturally. It can not only quickly access for
              your favorite cards but also meet your daily needs.{" "}
            </p>
          </div>

          <div className={styles.compactDiv}>
            <div className={styles.compactImage}>
              <Image
                src="/assets/images/wallet.jpg"
                alt="wallet"
                width={60}
                height={60}
                layout="responsive"
                priority
              />
            </div>
            <h3>Makes an ideal gift</h3>
            <p>
              {" "}
              The product makes for an ideal gift because of its elegant and
              classy design and the genuine leather. It is made of Genuine
              leather which looks even better with age.{" "}
            </p>
          </div>
        </div>

        <div
          style={{ borderBottom: "1px solid silver", paddingBottom: "20px" }}
        >
          <h2 style={{ marginTop: "35px" }}>Important information</h2>
          <h3 style={{ marginLeft: "35px" }}>Legal Disclaimer:</h3>
          <p style={{ marginLeft: "35px" }} className={styles.font}>
            Disclaimer :- "WILDHORN" is a registered trademark. Any unauthorized
            sellers will certainly bear the legal consequences of Copyright
            Infringement.
          </p>
        </div>
        <h2>Product Details</h2>
        <div className={styles.productDetails}>
          <ul>
            <li>
              <span style={{ fontWeight: "bold" }}>Product Dimensions : </span>
              14 x 12 x 2 cm; 150 Grams
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Date First Available :{" "}
              </span>
              5 April 2019
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Manufacturer : </span> ADL
              International
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>ASIN : </span> B08P5LWSS3
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Item model number : </span>
              WH7311BLACKCROCO
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Country of origin : </span>
              India
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Department : </span> Men
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Manufacturer : </span> ADL
              International, ADL International, 61/H G.J.Khan Road, Topsia,
              Kolkata-700039.
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Packer :</span> ADL
              International, 61/H G.J.Khan Road, Topsia, Kolkata-700039.
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Item Weight : </span> 150 g
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Item Dimensions LxWxH :
              </span>
              14 x 12 x 2 Centimeters
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Net Quantity :</span> 1 count
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Included Components : </span>
              Coin Pocket
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Generic Name :</span> Men's
              Wallet
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Best Sellers Rank :</span> #3
              in Bags, Wallets and Luggage (
              <span className={styles.color}>
                See Top 100 in Bags, Wallets and Luggage
              </span>
              )
            </li>
            <li>
              #1 in <span className={styles.color}>Men's Wallets</span>
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Customer Reviews :</span>
              <span className={styles.color}>18,922 ratings</span>
            </li>
          </ul>
        </div>

        <div>
          <h2>Inspired by your browsing history</h2>
        </div>
        <div className={styles.slider}>
          <div>
            <div className={styles.flexImage}>
              <Image
                src="/assets/images/saveImage.jpg"
                alt="saveImage"
                width={120}
                height={120}
                layout="responsive"
                priority
              />
            </div>
            <br />
            <div className={styles.pMargin}>
              <p className={styles.color}>CREATURE Reversible</p>
              <p className={styles.color}>Pu-Leather Formal Belt</p>
              <p className={styles.color}>For Men(Color-</p>
              <p className={styles.color}>Black/Brown//BL-01//4...</p>
              <p>
                <div className={styles.bestSellerNew}>#1 Best Seller</div>
              </p>
              <p className={styles.color}>in Men's belts</p>
              <p>₹298.00</p>
              <p className={styles.font}>
                Get it by{" "}
                <span style={{ fontWeight: "bold" }}>Sunday, May 22</span>
              </p>
            </div>
          </div>

          <div>
            <div className={styles.flexImage}>
              <Image
                src="/assets/images/saveImage.jpg"
                alt="saveImage"
                width={120}
                height={120}
                layout="responsive"
                priority
              />
            </div>
            <br />
            <div className={styles.pMargin}>
              <p className={styles.color}>PALAY Women's Long</p>
              <p className={styles.color}>Wallet Tassel PU Leather</p>
              <p className={styles.color}>Multi- Slots Girls Zipper</p>
              <p className={styles.color}>Coin Large Purse</p>
              <p>
                <div className={styles.bestSellerNew}>Limited time deal</div>
              </p>
              <p className={styles.color}>in Men's belts</p>
              <p>₹499.00</p>
              <p className={styles.font}>
                <strike>₹698.00</strike> (29% off)
              </p>
              <p className={styles.font}>
                Get it by{" "}
                <span style={{ fontWeight: "bold" }}>Monday, May 23</span>
              </p>
              <p className={styles.font}>FREE Delivery over ₹499.</p>
              <p className={styles.font}>Fulfilled by Amazon.</p>
              <p style={{ color: "#007600" }} className={styles.font}>
                Ends in 3 days
              </p>
            </div>
          </div>

          <div>
            <div className={styles.flexImage}>
              <Image
                src="/assets/images/saveImage.jpg"
                alt="saveImage"
                width={120}
                height={120}
                layout="responsive"
                priority
              />
            </div>
            <br />
            <div className={styles.pMargin}>
              <p className={styles.color}>AeroStark Drive Safe</p>
              <p className={styles.color}>Metal Keychain / Perfect</p>
              <p className={styles.color}>Birthday, Aniversary,</p>
              <p className={styles.color}>Valentine Gift for</p>
              <p className={styles.color}>husband Men Boyfriend</p>
              <p>₹179.00 - ₹199.00</p>
            </div>
          </div>

          <div>
            <div className={styles.flexImage}>
              <Image
                src="/assets/images/saveImage.jpg"
                alt="saveImage"
                width={120}
                height={120}
                layout="responsive"
                priority
              />
            </div>
            <br />
            <div className={styles.pMargin}>
              <p className={styles.color}>WildHorn RFID</p>
              <p className={styles.color}>Protected Genuine</p>
              <p className={styles.color}>Leather Wallet for Men</p>
              <p className={styles.color}>Black MATT</p>
              <p className={styles.color}>husband Men Boyfriend</p>
              <p>₹299.00 - ₹999.00</p>
            </div>
          </div>

          <div>
            <div className={styles.flexImage}>
              <Image
                src="/assets/images/saveImage.jpg"
                alt="saveImage"
                width={120}
                height={120}
                layout="responsive"
                priority
              />
            </div>
            <br />
            <div className={styles.pMargin}>
              <p className={styles.color}>WildHorn Wildhorn India</p>
              <p className={styles.color}>Black Leather Unisex</p>
              <p className={styles.color}>Leather Wallet for Men</p>
              <p className={styles.color}>RFID Blocking Passport</p>
              <p className={styles.color}>Holder (WHPH001 Black)</p>
              <p>₹299.00 - ₹540.00</p>
            </div>
          </div>

          <div>
            <div className={styles.flexImage}>
              <Image
                src="/assets/images/saveImage.jpg"
                alt="saveImage"
                width={120}
                height={120}
                layout="responsive"
                priority
              />
            </div>
            <br />
            <div className={styles.pMargin}>
              <p className={styles.color}>Safari Ray Polycarbonate</p>
              <p className={styles.color}>77 cms Midnight Blue</p>
              <p className={styles.color}>Hardsided Check-in</p>
              <p className={styles.color}>RFID Blocking Passport</p>
              <p className={styles.color}>Luggage(RAY 77 4W</p>
              <p className={styles.color}>MIDNIGHT BLUE)</p>
              <p>₹3,899.00</p>
            </div>
          </div>
        </div>

        <h2>Customers questions & answers</h2>
        <div>
          <input
            type="text"
            placeholder="Have a question? Search for answers"
            className={styles.inputAns}
          ></input>
        </div>
        <div className={styles.font}>
          <div style={{ display: "flex" }}>
            <p style={{ fontWeight: "bold" }}>Question : </p>
            <p className={styles.pColor}>Is this original and worth to buy?</p>
          </div>
          <div style={{ display: "flex", marginTop: "-15px" }}>
            <p style={{ fontWeight: "bold" }}>Answer :</p>
            <p className={styles.pText}>
              The so called leather is very hard and the slots are small to
              accommodate credit cards . Even
              <br />
              without putting anything in , it is too thick and bulky , I
              returned it immediately. Not worth buying!
              <br />
              <span style={{ color: "gray" }}>By Gaurav on 28 May, 2019</span>
            </p>
          </div>
        </div>
        <div className={styles.font}>
          <div style={{ display: "flex" }}>
            <p style={{ fontWeight: "bold" }}>Question : </p>
            <p className={styles.pColor}>
              When we scrach at that time lines are formed or not???
            </p>
          </div>
          <div style={{ display: "flex", marginTop: "-15px" }}>
            <p style={{ fontWeight: "bold" }}>Answer : </p>
            <p className={styles.pText}>
              No
              <br />
              <span style={{ color: "gray" }}>By EmRaan on 31 May, 2019</span>
            </p>
          </div>
        </div>
        <div className={styles.font}>
          <div style={{ display: "flex" }}>
            <p style={{ fontWeight: "bold" }}>Question : </p>
            <p className={styles.pColor}>
              Does the wallet will be inside the wildhorn box?
            </p>
          </div>
          <div style={{ display: "flex", marginTop: "-15px" }}>
            <p style={{ fontWeight: "bold" }}>Answer : </p>
            <p className={styles.pText}>
              Yes. And inside wallet coin holder you will have antibacterial bag
              as well. So cheer up it is good
              <br />
              <span style={{ color: "gray" }}>
                By ablazekk on 5 October, 2019
              </span>
            </p>
          </div>
        </div>
        <div
          className={styles.font}
          style={{ borderBottom: "1px solid silver" }}
        >
          <div style={{ display: "flex" }}>
            <p style={{ fontWeight: "bold" }}>Question : </p>
            <p className={styles.pColor}>What is quality of wallet?</p>
          </div>
          <div style={{ display: "flex", marginTop: "-15px" }}>
            <p style={{ fontWeight: "bold" }}>Answer : </p>
            <p className={styles.pText}>
              Very good
              <br />
              <span style={{ color: "gray" }}>
                By Dark night on 23 August, 2021
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.reviewsMainDiv}>
        <h2>Reviews with images</h2>
        <div className={styles.reviews}>
          <div className={styles.reviewsImageDiv}>
            <Image
              src="/assets/images/reviewsImage.jpg"
              alt="saveImage"
              width={40}
              height={40}
              layout="responsive"
              priority
            />
          </div>

          <div className={styles.reviewsImageDiv}>
            <Image
              src="/assets/images/reviewsImage.jpg"
              alt="saveImage"
              width={40}
              height={40}
              layout="responsive"
              priority
            />
          </div>

          <div className={styles.reviewsImageDiv}>
            <Image
              src="/assets/images/reviewsImage.jpg"
              alt="saveImage"
              width={40}
              height={40}
              layout="responsive"
              priority
            />
          </div>

          <div className={styles.reviewsImageDiv}>
            <Image
              src="/assets/images/reviewsImage.jpg"
              alt="saveImage"
              width={200}
              height={200}
              layout="responsive"
              priority
            />
          </div>
        </div>
        <div className={styles.revMargin}>
          <p className={styles.color}>See all customer images</p>
          <h2>Read reviews that mention</h2>
          <div className={styles.columnDiv}>
            <div>value for money</div>
            <div>good quality</div>
            <div>card slots</div>
            <div>waste of money</div>
          </div>

          <div className={styles.columnDiv}>
            <div>back pocket</div>
            <div>quality is good</div>
            <div>genuine leather</div>
            <div>worth the money</div>
          </div>

          <div className={styles.columnDiv}>
            <div>quality of material</div>
            <div>little bit</div>
            <div>ordered blue</div>
            <div>overall good</div>
            <div>card holders</div>
          </div>

          <p
            className={styles.color}
            style={{ borderBottom: "1px solid silver" }}
          >
            See more
          </p>
          <div className={styles.reviewsDropdown}>
            <select name="prod" id="prod" className={styles.reviewsSelect}>
              <option value="clothing">Top reviews</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <h2>Top reviews from India</h2>
          <div className={styles.imgNewDiv}>
            <div className={styles.imgNew}>
              <Image
                src="/assets/images/img.jpeg"
                alt="saveImage"
                width={40}
                height={40}
                layout="responsive"
                priority
              />
            </div>
            <div className={styles.imgNewText}>
              <p>Pritish</p>
            </div>
          </div>
          <div className={styles.fontSizeNew}>
            <p style={{ fontWeight: "bold" }}>
              Poor Quality product-Disappointed
            </p>
            <p style={{ color: "gray" }}>Reviewed in India on 13 May 2019</p>
            <p style={{ color: "gray" }}>
              Colour: BLUE HUNTER{" "}
              <span style={{ color: "#c45500", fontWeight: "bold" }}>
                Verified purchase
              </span>
            </p>
            <p className={styles.lineHeight}>
              I am a regular customer on amazon, usually the products are
              genuine but this time very disappointed with the product quality.
            </p>
            <p className={styles.lineHeight}>
              Image 1- Stiching is worn out on inside and Image 2 - one side of
              wallet looks like wet and damaged with leather torn.
            </p>
            <p>
              Not sure if the product got damaged in transportation or it was
              damaged initially.
            </p>
            <p>DEFINETELY NOT HAPPY!</p>
            <div style={{ marginLeft: "15px", display: "flex" }}>
              <div className={styles.images}>
                <Image
                  src="/assets/images/reviewsImage.jpg"
                  alt="saveImage"
                  width={100}
                  height={130}
                  layout="responsive"
                  priority
                />
              </div>
              <div className={styles.images}>
                <Image
                  src="/assets/images/reviewsImage.jpg"
                  alt="saveImage"
                  width={100}
                  height={130}
                  layout="responsive"
                  priority
                />
              </div>
            </div>
            <p className={styles.mTop}>373 people found this helpful</p>
            <div style={{display:"flex"}}>
              <div className={styles.helpDiv}>Helpful</div>
              <div className={styles.repoDiv}>Report abuse</div>
            </div>
          </div>

          <div className={styles.imgNewDiv}>
            <div className={styles.imgNew}>
              <Image
                src="/assets/images/img.jpeg"
                alt="saveImage"
                width={40}
                height={40}
                layout="responsive"
                priority
              />
            </div>
            <div className={styles.imgNewText}>
              <p>Amol</p>
            </div>
          </div>
          <div className={styles.fontSizeNew}>
            <p style={{ fontWeight: "bold" }}>
              Very hard wallet. discolored. Uncomfortable in the pocket. Returned it immediately. not as described
            </p>
            <p style={{ color: "gray" }}>Reviewed in India on 22 May 2019</p>
            <p style={{ color: "gray" }}>
              Colour: BLUE HUNTER
              <span style={{ color: "#c45500", fontWeight: "bold" }}>
                Verified purchase
              </span>
            </p>
            <p className={styles.lineHeight}>
              Very hard wallet. Discolored. Uncomfortable in the pocket. Returned it immediately.
            </p>
            <div style={{ marginLeft: "15px", display: "flex" }}>
              <div className={styles.images}>
                <Image
                  src="/assets/images/reviewsImage.jpg"
                  alt="saveImage"
                  width={100}
                  height={130}
                  layout="responsive"
                  priority
                />
              </div>
              <div className={styles.images}>
                <Image
                  src="/assets/images/reviewsImage.jpg"
                  alt="saveImage"
                  width={100}
                  height={130}
                  layout="responsive"
                  priority
                />
              </div>
              <div className={styles.images}>
                <Image
                  src="/assets/images/reviewsImage.jpg"
                  alt="saveImage"
                  width={100}
                  height={130}
                  layout="responsive"
                  priority
                />
              </div>
            </div>
            <p className={styles.mTop}>220 people found this helpful</p>
            <div style={{display:"flex"}}>
              <div className={styles.helpDiv}>Helpful</div>
              <div className={styles.repoDiv}>Report abuse</div>
            </div>
          </div>

          <div className={styles.imgNewDiv}>
            <div className={styles.imgNew}>
              <Image
                src="/assets/images/img.jpeg"
                alt="saveImage"
                width={40}
                height={40}
                layout="responsive"
                priority
              />
            </div>
            <div className={styles.imgNewText}>
              <p>Piyush Kashyap</p>
            </div>
          </div>
          <div className={styles.fontSizeNew}>
            <p style={{ fontWeight: "bold" }}>
              Great but the same colour would have been awesome
            </p>
            <p style={{ color: "gray" }}>Reviewed in India on 14 May 2019</p>
            <p style={{ color: "gray" }}>
              Colour: BLUE HUNTER
              <span style={{ color: "#c45500", fontWeight: "bold" }}>
                Verified purchase
              </span>
            </p>
            <p className={styles.lineHeight}>
              The product is good. The number of card spaces and overall space is just awesome.
            </p>
            <p className={styles.lineHeight}>
              Anyways the color differs a bit from what's show in the picture here.
            </p>
            <p className={styles.lineHeight}>
              Got it for 449 and i feel it to be great at that price!
            </p>
            <p style={{color:"gray"}}>121 people found this helpful</p>
            <div style={{display:"flex"}}>
              <div className={styles.helpDiv}>Helpful</div>
              <div className={styles.repoDiv}>Report abuse</div>
            </div>
          </div>

          <div className={styles.imgNewDiv}>
            <div className={styles.imgNew}>
              <Image
                src="/assets/images/img.jpeg"
                alt="saveImage"
                width={40}
                height={40}
                layout="responsive"
                priority
              />
            </div>
            <div className={styles.imgNewText}>
              <p>Kishlay</p>
            </div>
          </div>
          <div className={styles.fontSizeNew}>
            <p style={{ fontWeight: "bold" }}>
              Good for boys.
            </p>
            <p style={{ color: "gray" }}>Reviewed in India on 11 February 2020</p>
            <p style={{ color: "gray" }}>
              Colour: BLUE HUNTER{" "}
              <span style={{ color: "#c45500", fontWeight: "bold" }}>
                Verified purchase
              </span>
            </p>
            <p className={styles.lineHeight}>
              Product is good. According to price. But not excellent.
            </p>
            <p className={styles.lineHeight}>
              It comes with 9 card holder pocket.
            </p>
            <p>1 coin pocket</p>
            <p>2 pocket for note(currency)</p>
            <p>2 pocket for I'd card</p>
            <p>1 pocket with chain.</p>
            <p>3 pocket more, but i don't know for what.</p>
            <p>Material is leather but not soft.</p>
            <p className={styles.lineHeight}>But it was ok with me because I am girl I purchased it to keep it in my large handbag. For keeping money because in large bag money get lost in it.</p>
            <div style={{ marginLeft: "15px", display: "flex" }}>
              <div className={styles.images}>
                <Image
                  src="/assets/images/reviewsImage.jpg"
                  alt="saveImage"
                  width={100}
                  height={130}
                  layout="responsive"
                  priority
                />
              </div>
              <div className={styles.images}>
                <Image
                  src="/assets/images/reviewsImage.jpg"
                  alt="saveImage"
                  width={100}
                  height={130}
                  layout="responsive"
                  priority
                />
              </div>
              <div className={styles.images}>
                <Image
                  src="/assets/images/reviewsImage.jpg"
                  alt="saveImage"
                  width={100}
                  height={130}
                  layout="responsive"
                  priority
                />
              </div>
              <div className={styles.images}>
                <Image
                  src="/assets/images/reviewsImage.jpg"
                  alt="saveImage"
                  width={100}
                  height={130}
                  layout="responsive"
                  priority
                />
              </div>
              <div className={styles.images}>
                <Image
                  src="/assets/images/reviewsImage.jpg"
                  alt="saveImage"
                  width={100}
                  height={130}
                  layout="responsive"
                  priority
                />
              </div>
            </div>
            <p className={styles.mTop}>27 people found this helpful</p>
            <div style={{display:"flex"}}>
              <div className={styles.helpDiv}>Helpful</div>
              <div className={styles.repoDiv}>Report abuse</div>
            </div>
          </div>

        </div>
      </div>

      <div className={styles.recommend}>
          <p>See personalized recommendations</p>
          <div>Sign In</div>
          <p className={styles.font}>
            New customer? <span className={styles.color}>Start here.</span>
          </p>
      </div>

      <div className={styles.backToTop}>
        <p>Back to top</p>
      </div>

      <div className={styles.footer}>
        <div className={styles.footerText}>
          <div>
            <h4>Get to Know Us</h4>
            <p>About Us</p>
            <p>Careers</p>
            <p>Press Releases</p>
            <p>Amazon Cares</p>
            <p>Gift a Smile</p>
            <p>Amazon Science</p>
          </div>

          <div>
            <h4>Connect with Us</h4>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>

          <div>
            <h4>Make Money with Us</h4>
            <p>Sell on Amazon</p>
            <p>Sell under Amazon Accelerator</p>
            <p>Amazon Global Selling</p>
            <p>Become an Affiliate</p>
            <p>Fulfilment by Amazon</p>
            <p>Advertise Your Products</p>
            <p>Amazon Pay on Merchants</p>
          </div>

          <div style={{ marginLeft: "35px" }}>
            <h4>Let Us Help You</h4>
            <p>COVID-19 and Amazon</p>
            <p>Your Account</p>
            <p>Returns Centre</p>
            <p>100% Purchase Protection</p>
            <p>Amazon App Download</p>
            <p>Amazon Assistant Download</p>
            <p>Help</p>
          </div>
        </div>

        <div className={styles.footerLogo}>
          <div>
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              width={120}
              height={85}
              priority
            />
          </div>
          <div className={styles.select}>
            <select name="lang" id="lang" className={styles.select}>
              <option value="eng">English</option>
            </select>
          </div>

          <div class={styles.places}>
            <p>Australia</p>
            <p>Brazil</p>
            <p>Canada</p>
            <p>China</p>
            <p>France</p>
            <p>Germany</p>
            <p>Italy</p>
            <p>Japan</p>
            <p>Mexico</p>
            <p>Netherlands</p>
            <p>Poland</p>
            <p>Singapore</p>
            <p>Spain</p>
            <p>Turkey</p>
            <p>United Arab Emirates</p>
            <p>United</p>
          </div>

          <div className={styles.states}>
            <p>Kingdom</p>
            <p>United States</p>
          </div>
        </div>

        <div className={styles.newFooterLogo}>
          <div style={{ width: "250px", height: "200px" }}>
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              width={250}
              height={200}
              layout="responsive"
              priority
            />
          </div>
          <div className={styles.newSelect}>
            <select name="lang" id="lang" className={styles.newSelect}>
              <option value="eng">English</option>
            </select>
          </div>

          <div class={styles.newPlaces}>
            <p>Australia</p>
            <p>Brazil</p>
            <p>United</p>
            <p>Canada</p>
            <p>China</p>
            <p>France</p>
            <p>Germany</p>
            <p>Italy</p>
            <p>Japan</p>
            <p>Mexico</p>
          </div>

          <div className={styles.newStates}>
            <p>Kingdom</p>
            <p>United States</p>
          </div>
        </div>

        <div className={styles.footerFlex}>
          <div className={styles.flex}>
            <div className={styles.display}>
              <p>AbeBooks</p>
              <p style={{ color: "gray" }}>Books, art</p>
              <p style={{ color: "gray" }}>& collectibles</p>
            </div>
            <div className={styles.display}>
              <p>Amazon Web Services</p>
              <p style={{ color: "gray" }}>Scalable Cloud</p>
              <p style={{ color: "gray" }}>Computing Services</p>
            </div>
            <div className={styles.display}>
              <p>Audible</p>
              <p style={{ color: "gray" }}>Download</p>
              <p style={{ color: "gray" }}>Audio Books</p>
            </div>
            <div className={styles.display}>
              <p>DPReview</p>
              <p style={{ color: "gray" }}>Digital</p>
              <p style={{ color: "gray" }}>Photography</p>
            </div>
            <div className={styles.display}>
              <p>IMDb</p>
              <p style={{ color: "gray" }}>Movies, TV</p>
              <p style={{ color: "gray" }}>& celebrities</p>
            </div>
          </div>

          <div className={styles.flex}>
            <div className={styles.display}>
              <p>Shopbop</p>
              <p style={{ color: "gray" }}>Designer</p>
              <p style={{ color: "gray" }}>Fashion Brands</p>
            </div>
            <div className={styles.display}>
              <p>Amazon Business</p>
              <p style={{ color: "gray" }}>Everything For</p>
              <p style={{ color: "gray" }}>Your Business</p>
            </div>
            <div className={styles.display}>
              <p>Prime Now</p>
              <p style={{ color: "gray" }}>2-Hour Delivery</p>
              <p style={{ color: "gray" }}>on Everyday Items</p>
            </div>
            <div className={styles.display}>
              <p>Amazon Prime Music</p>
              <p style={{ color: "gray" }}>90 million songs, ad-free</p>
              <p style={{ color: "gray" }}>Over 15 million podcast episodes</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Amazskupage;
