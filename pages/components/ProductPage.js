import Link from "next/link";
import classes from "../../styles/ProductPage.module.css";
import Navbar1 from "./navbar";
import Image from "next/image";

export default function ProductPage() {
  return (
    <>
      {/*
      <div className={classes.navfix}>
      <Navbar1 />
      </div>
    */}
      <div>
        <div className={classes.main_info_div}>
          <div className={classes.name_and_like}>
            <div className={classes.name}>
              <div className={classes.product_name}>
                <h1>PRODUCT NAME</h1>
              </div>
              <div className={classes.brand_name}>
                <h3>BRAND NAME</h3>
              </div>
            </div>
            <div className={classes.likenshare}>
              <div className={classes.share}>
                <Image
                  className={classes.icons}
                  src="/share_4.png"
                  width={50}
                  height={50}
                />
              </div>
              <div className={classes.like}>
                <Image
                  className={classes.icons}
                  src="/share_4.png"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
          <div className={classes.product_image_and_agentinfo}>
            <div className={classes.product_image}>
              <Image
                className={classes.product_images}
                src="/yachtcarousel2.jpg"
                width={1920}
                height={1080}
              />
            </div>
            <div className={classes.agentinfo}>
              <div className={classes.agent_backimg}>
                <Image
                  className={classes.product_images_fit}
                  src="/atvcarousel6.jpg"
                  width={1920}
                  height={1080}
                />
              </div>
              <div className={classes.agent_img}>
                <Image
                  className={classes.product_images_fit}
                  src="/profilepic.jpg"
                  width={1920}
                  height={1080}
                />
              </div>
              <div className={classes.agent_details}>
                <h4>Listed By : </h4>
                <h2>Agent Name</h2>
              </div>
            </div>
          </div>
          <div className={classes.price_contact_buynow}>
            <div className={classes.price}>
              <div className={classes.curr}>
                <h3>In USD</h3>
              </div>
              <div className={classes.money}>
                <h2>$ 500,000,000</h2>
              </div>
              <div className={classes.next_curr}>
                <Link href="#" className={classes.links}>
                  <h3>EUR</h3>
                </Link>
                <Link href="#" className={classes.links}>
                  <h3>USD</h3>
                </Link>
                <Link href="#" className={classes.links}>
                  <h3>IND</h3>
                </Link>
              </div>
            </div>
            <div className={classes.contact}>
              <button>
                <Image
                  className={classes.icons}
                  src="/map_1.png"
                  width={64}
                  height={64}
                />
                <p>VISIT</p>
              </button>
              <button>
                <Image
                  className={classes.icons}
                  src="/call_2.png"
                  width={64}
                  height={64}
                />
                <p>CALL</p>
              </button>
              <button>
                <Image
                  className={classes.icons}
                  src="/chat_1.png"
                  width={64}
                  height={64}
                />
                <p>CHAT</p>
              </button>
              <button>
                <Image
                  className={classes.icons}
                  src="/liveview_2.png"
                  width={64}
                  height={64}
                />
                <p>LIVE VIEW</p>
              </button>
              <button>
                <Image
                  className={classes.icons}
                  src="/bookavisit_2.png"
                  width={64}
                  height={64}
                />
                <p>BOOK A VISIT</p>
              </button>
            </div>
            <div className={classes.buynow}>
              <div className={classes.buy_btn}>
                <button>BUY NOW</button>
                <div>
                  <p>Delivery in 15 day.</p>
                </div>
              </div>
              <div className={classes.cart_btn}>
                <button>
                  <Image
                    className={classes.icons}
                    src="/cart_2.png"
                    width={64}
                    height={64}
                  />
                  <p>Add To Cart</p>
                </button>
                <button>Add To Wishlist</button>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.sub_info_div}>
          <div className={classes.sssss}>
            <div>
              <div className={classes.ideation}>
                <h3>Design Thinking Ideation</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
                  ex quaerat vitae alias expedita a similique, quos tempora
                  maxime deserunt.
                </p>
              </div>
              <div className={classes.specifications}>
                <h3>General Specifications</h3>
                <div className={classes.inner_specifications}>
                  <div>
                    <p>lorem</p>
                    <p>lorem</p>
                    <p>lorem</p>
                  </div>
                  <div>
                    <p>lorem</p>
                    <p>lorem</p>
                    <p>lorem</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.gallery}>
              <div className={classes.big_image}>
                <Image
                  className={classes.product_images_1}
                  src="/yachtcarousel1.jpg"
                  width={1920}
                  height={1080}
                />
              </div>
              <div className={classes.big_imag}>
                <Image
                  className={classes.product_images_2}
                  src="/yachtcarousel2.jpg"
                  width={1920}
                  height={1080}
                />
                <Image
                  className={classes.product_images_2}
                  src="/yachtcarousel3.jpg"
                  width={1920}
                  height={1080}
                />
                <Image
                  className={classes.product_images_2}
                  src="/yachtcarousel4.jpg"
                  width={1920}
                  height={1080}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.sub_info_div_2}>
          <div className={classes.sssss2}>
            <div className={classes.specdiv}>
              <div className={classes.specifications}>
                <h3>Accomodations</h3>
                <div className={classes.inner_specifications_2}>
                  <div>
                    <p>lorem</p>
                    <p>lorem</p>
                    <p>lorem</p>
                  </div>
                  <div>
                    <p>lorem</p>
                    <p>lorem</p>
                    <p>lorem</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.gallery}>
              <div className={classes.two_image}>
                <Image
                  className={classes.category_images}
                  src="/jetcarousel3.jpg"
                  width={1920}
                  height={1080}
                />{" "}
                <Image
                  className={classes.category_images}
                  src="/jetcarousel4.jpg"
                  width={1920}
                  height={1080}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.sub_info_div_2}>
          <div className={classes.sssss2}>
            <div className={classes.specdiv}>
              <div className={classes.specifications}>
                <h3>Amenities</h3>
                <div className={classes.inner_specifications_2}>
                  <div>
                    <p>lorem</p>
                    <p>lorem</p>
                    <p>lorem</p>
                  </div>
                  <div>
                    <p>lorem</p>
                    <p>lorem</p>
                    <p>lorem</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.gallery}>
              <div className={classes.two_image}>
                <Image
                  className={classes.category_images}
                  src="/carcarousel3.jpg"
                  width={1920}
                  height={1080}
                />{" "}
                <Image
                  className={classes.category_images}
                  src="/carcarousel5.jpg"
                  width={1920}
                  height={1080}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.sub_info_div_2}>
          <div className={classes.sssss2}>
            <div className={classes.specdiv}>
              <div className={classes.specifications}>
                <h3>Tenders And Toys</h3>
                <div className={classes.inner_specifications_2}>
                  <div>
                    <p>lorem</p>
                    <p>lorem</p>
                    <p>lorem</p>
                  </div>
                  <div>
                    <p>lorem</p>
                    <p>lorem</p>
                    <p>lorem</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.gallery}>
              <div className={classes.two_image}>
                <Image
                  className={classes.category_images}
                  src="/bikecarousel2.jpg"
                  width={1920}
                  height={1080}
                />{" "}
                <Image
                  className={classes.category_images}
                  src="/bikecarousel3.jpg"
                  width={1920}
                  height={1080}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.sub_info_div_2}>
          <div className={classes.sssss2}>
            <div className={classes.specdiv}>
              <div className={classes.specifications}>
                <h3>Interior</h3>
                <div className={classes.inner_specifications_2}>
                  <div>
                    <p>lorem</p>
                    <p>lorem</p>
                    <p>lorem</p>
                  </div>
                  <div>
                    <p>lorem</p>
                    <p>lorem</p>
                    <p>lorem</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.gallery}>
              <div className={classes.two_image}>
                <Image
                  className={classes.category_images}
                  src="/rvcarousel2.jpg"
                  width={1920}
                  height={1080}
                />{" "}
                <Image
                  className={classes.category_images}
                  src="/rvcarousel5.jpg"
                  width={1920}
                  height={1080}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.sub_info_div_2}>
          <div className={classes.sssss2}>
            <div className={classes.specdiv}>
              <div className={classes.specifications}>
                <h3>Exterior</h3>
                <div className={classes.inner_specifications_2}>
                  <div>
                    <p>lorem</p>
                    <p>lorem</p>
                    <p>lorem</p>
                  </div>
                  <div>
                    <p>lorem</p>
                    <p>lorem</p>
                    <p>lorem</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.gallery}>
              <div className={classes.two_image}>
                <Image
                  className={classes.category_images}
                  src="/submarinecarousel2.jpg"
                  width={1920}
                  height={1080}
                />{" "}
                <Image
                  className={classes.category_images}
                  src="/submarinecarousel3.jpg"
                  width={1920}
                  height={1080}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.sub_info_div_2}>
          <div className={classes.sssss2}>
            <div className={classes.specdiv}>
              <div className={classes.specifications}>
                <h3>Engine</h3>
                <div className={classes.inner_specifications_2}>
                  <div>
                    <p>lorem</p>
                    <p>lorem</p>
                    <p>lorem</p>
                  </div>
                  <div>
                    <p>lorem</p>
                    <p>lorem</p>
                    <p>lorem</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.gallery}>
              <div className={classes.two_image}>
                <Image
                  className={classes.category_images}
                  src="/estatecarousel4.jpg"
                  width={1920}
                  height={1080}
                />{" "}
                <Image
                  className={classes.category_images}
                  src="/estatecarousel5.jpg"
                  width={1920}
                  height={1080}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={classes.about}>
          <div className={classes.about_product}>
            <h1>About</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              error distinctio accusamus enim vitae maxime repellendus totam
              aliquam, recusandae possimus, vero sit dolorem perspiciatis sunt
              voluptas nesciunt dicta quos quasi quas dolorum! Aliquid facere
              dolor in sapiente optio excepturi autem, perspiciatis rerum
              impedit. Asperiores, consequatur perferendis. Quam a id eius.
              Repellat porro aliquam culpa amet placeat dignissimos, debitis
              aut, labore dolorum quae aperiam quasi reprehenderit molestias
              tempora assumenda! Quibusdam maiores tempore fuga sed cum nesciunt
              sint fugit magni praesentium vel excepturi id odio quasi,
              accusantium non commodi minus, necessitatibus omnis adipisci dolor
              ex modi exercitationem. Deserunt voluptas architecto maxime, iure
              ullam explicabo corporis sapiente temporibus expedita saepe
              repellendus eaque hic ab, unde tempora officia eligendi vel
              perspiciatis. Est facilis rem voluptatum blanditiis perferendis?
              Recusandae minus beatae fugit officiis, provident cum numquam
              nesciunt nemo incidunt accusantium aliquid laboriosam illo
              voluptates quis quod hic repellendus quia enim nobis quaerat
              dolorem. Sed, fugiat dolores magni nobis illum quas eius? Dicta
              tempore sequi nihil! Corporis ipsa consequuntur pariatur error vel
              soluta laborum, atque aperiam doloribus, nobis culpa maxime, quas
              sint nihil magnam. Tenetur impedit et amet, accusantium ullam
              nulla eos commodi neque hic? Eligendi esse eius explicabo
              blanditiis illum ab optio, natus doloribus! Deserunt!
            </p>
          </div>
          <div className={classes.about_agent}>
            <div className={classes.about_agent_backimg}>
              <Image
                className={classes.product_images_fit}
                src="/atvcarousel6.jpg"
                width={1920}
                height={1080}
              />
            </div>
            <div className={classes.about_agent_img}>
              <Image
                className={classes.product_images_fit}
                src="/profilepic.jpg"
                width={1920}
                height={1080}
              />
            </div>
            <div className={classes.about_agent_details}>
              <h4>Listed By : </h4>
              <h1>Agent Name</h1>
            </div>
          </div>
        </div>
        <div className={classes.lower_cart}>
          <div className={classes.price_contact_buynow}>
            <div className={classes.price}>
              <div className={classes.money_det}>
                <h5>Brand Name</h5>
                <h3>Product Name</h3>
                <h1>$ 500,000,000</h1>
              </div>
            </div>
            <div className={classes.contact}>
              <button>
                <Image
                  className={classes.icons}
                  src="/map_1.png"
                  width={64}
                  height={64}
                />
                <p>VISIT</p>
              </button>
              <button>
                <Image
                  className={classes.icons}
                  src="/call_2.png"
                  width={64}
                  height={64}
                />
                <p>CALL</p>
              </button>
              <button>
                <Image
                  className={classes.icons}
                  src="/chat_1.png"
                  width={64}
                  height={64}
                />
                <p>CHAT</p>
              </button>
              <button>
                <Image
                  className={classes.icons}
                  src="/liveview_2.png"
                  width={64}
                  height={64}
                />
                <p>LIVE VIEW</p>
              </button>
              <button>
                <Image
                  className={classes.icons}
                  src="/bookavisit_2.png"
                  width={64}
                  height={64}
                />
                <p>BOOK A VISIT</p>
              </button>
            </div>
            <div className={classes.buynow}>
              <div className={classes.buy_btn}>
                <button>BUY NOW</button>
                <div>
                  <p>Delivery in 15 day.</p>
                </div>
              </div>
              <div className={classes.cart_btn}>
                <button>
                  <Image
                    className={classes.icons}
                    src="/cart_2.png"
                    width={64}
                    height={64}
                  />
                  <p>Add To Cart</p>
                </button>
                <button>Add To Wishlist</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
