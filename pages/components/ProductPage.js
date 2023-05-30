import Link from "next/link";
import classes from "../../styles/ProductPage.module.css";
import Navbar1 from "./navbar";
import Image from "next/image";

export default function ProductPage() {
  return (
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
              <h1>S</h1>
            </div>
            <div className={classes.like}>
              <h1>L</h1>
            </div>
          </div>
        </div>
        <div className={classes.product_image_and_agentinfo}>
          <div className={classes.product_image}>
            <Image
              className={classes.product_images}
              src="/yachtcarousel5.jpg"
              width={1920}
              height={1080}
            />
          </div>
          <div className={classes.agentinfo}>
            <div className={classes.agent_backimg}>
              <Image
                className={classes.product_images}
                src="/yachtcarousel5.jpg"
                width={1920}
                height={1080}
              />
            </div>
            <div className={classes.agent_img}>
              <Image
                className={classes.product_images}
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
            <button>VISIT</button>
            <button>CALL</button>
            <button>CHAT</button>
            <button>LIVE View</button>
            <button>Book A Visit</button>
          </div>
          <div className={classes.buynow}>
            <div className={classes.buy_btn}>
              <button>BUY NOW</button>
              <div>
                <h3>Delivery in 15 day.</h3>
              </div>
            </div>
            <div className={classes.cart_btn}>
              <button>Cart</button>
              <button>wishlist</button>
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
                ex quaerat vitae alias expedita a similique, quos tempora maxime
                deserunt.
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
                src="/yachtcarousel5.jpg"
                width={1920}
                height={1080}
              />
            </div>
            <div className={classes.big_imag}>
              <Image
                className={classes.product_images_2}
                src="/yachtcarousel5.jpg"
                width={1920}
                height={1080}
              />
              <Image
                className={classes.product_images_2}
                src="/yachtcarousel5.jpg"
                width={1920}
                height={1080}
              />
              <Image
                className={classes.product_images_2}
                src="/yachtcarousel5.jpg"
                width={1920}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.sub_info_div_2}>
        <div className={classes.sssss2}>
          <div>
            <div className={classes.specifications}>
              <h3>General Specifications</h3>
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
                src="/yachtcarousel5.jpg"
                width={1920}
                height={1080}
              />{" "}
              <Image
                className={classes.category_images}
                src="/yachtcarousel5.jpg"
                width={1920}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.sub_info_div_2}>
        <div className={classes.sssss2}>
          <div>
            <div className={classes.specifications}>
              <h3>General Specifications</h3>
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
                src="/yachtcarousel5.jpg"
                width={1920}
                height={1080}
              />{" "}
              <Image
                className={classes.category_images}
                src="/yachtcarousel5.jpg"
                width={1920}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.sub_info_div_2}>
        <div className={classes.sssss2}>
          <div>
            <div className={classes.specifications}>
              <h3>General Specifications</h3>
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
                src="/yachtcarousel5.jpg"
                width={1920}
                height={1080}
              />{" "}
              <Image
                className={classes.category_images}
                src="/yachtcarousel5.jpg"
                width={1920}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.sub_info_div_2}>
        <div className={classes.sssss2}>
          <div>
            <div className={classes.specifications}>
              <h3>General Specifications</h3>
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
                src="/yachtcarousel5.jpg"
                width={1920}
                height={1080}
              />{" "}
              <Image
                className={classes.category_images}
                src="/yachtcarousel5.jpg"
                width={1920}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.sub_info_div_2}>
        <div className={classes.sssss2}>
          <div>
            <div className={classes.specifications}>
              <h3>General Specifications</h3>
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
                src="/yachtcarousel5.jpg"
                width={1920}
                height={1080}
              />{" "}
              <Image
                className={classes.category_images}
                src="/yachtcarousel5.jpg"
                width={1920}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.sub_info_div_2}>
        <div className={classes.sssss2}>
          <div>
            <div className={classes.specifications}>
              <h3>General Specifications</h3>
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
                src="/yachtcarousel5.jpg"
                width={1920}
                height={1080}
              />{" "}
              <Image
                className={classes.category_images}
                src="/yachtcarousel5.jpg"
                width={1920}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.sub_info_div_2}>
        <div className={classes.sssss2}>
          <div>
            <div className={classes.specifications}>
              <h3>General Specifications</h3>
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
                src="/yachtcarousel5.jpg"
                width={1920}
                height={1080}
              />{" "}
              <Image
                className={classes.category_images}
                src="/yachtcarousel5.jpg"
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
            dolor in sapiente optio excepturi autem, perspiciatis rerum impedit.
            Asperiores, consequatur perferendis. Quam a id eius. Repellat porro
            aliquam culpa amet placeat dignissimos, debitis aut, labore dolorum
            quae aperiam quasi reprehenderit molestias tempora assumenda!
            Quibusdam maiores tempore fuga sed cum nesciunt sint fugit magni
            praesentium vel excepturi id odio quasi, accusantium non commodi
            minus, necessitatibus omnis adipisci dolor ex modi exercitationem.
            Deserunt voluptas architecto maxime, iure ullam explicabo corporis
            sapiente temporibus expedita saepe repellendus eaque hic ab, unde
            tempora officia eligendi vel perspiciatis. Est facilis rem
            voluptatum blanditiis perferendis? Recusandae minus beatae fugit
            officiis, provident cum numquam nesciunt nemo incidunt accusantium
            aliquid laboriosam illo voluptates quis quod hic repellendus quia
            enim nobis quaerat dolorem. Sed, fugiat dolores magni nobis illum
            quas eius? Dicta tempore sequi nihil! Corporis ipsa consequuntur
            pariatur error vel soluta laborum, atque aperiam doloribus, nobis
            culpa maxime, quas sint nihil magnam. Tenetur impedit et amet,
            accusantium ullam nulla eos commodi neque hic? Eligendi esse eius
            explicabo blanditiis illum ab optio, natus doloribus! Deserunt!
          </p>
        </div>
        <div className={classes.about_agent}>
          <div className={classes.about_agent_backimg}>
            <Image
              className={classes.product_images}
              src="/yachtcarousel5.jpg"
              width={1920}
              height={1080}
            />
          </div>
          <div className={classes.about_agent_img}>
            <Image
              className={classes.product_images}
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
            <button>VISIT</button>
            <button>CALL</button>
            <button>CHAT</button>
            <button>LIVE View</button>
            <button>Book A Visit</button>
          </div>
          <div className={classes.buynow}>
            <div className={classes.buy_btn}>
              <button>BUY NOW</button>
              <div>
                <h3>Delivery in 15 day.</h3>
              </div>
            </div>
            <div className={classes.cart_btn}>
              <button>Cart</button>
              <button>wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
