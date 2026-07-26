import React from "react";
import article from "../Assets/article.png";
import youtube from "../Assets/youtube.png";

const BlogDetails = () => {
  return (
    <>
      <div className="section articlesdetails_container">
        <div className="articlesdetails_sec">
          <h3>Lorem ipsum dolor sit amet.</h3>
          <img src={article} alt="" />
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            aliquid facere tempore ut, in dolor vel doloribus, deleniti
            inventore cupiditate sint eos provident enim dicta consequuntur qui
            obcaecati quidem non. Vero sint, quos culpa maiores nobis fuga et
            placeat molestiae aliquid neque qui excepturi maxime ab corrupti
            incidunt ipsam officiis voluptatem ut voluptas saepe numquam, vitae
            natus, possimus perspiciatis. Nulla error modi, odio saepe quo
            voluptatibus non, unde aliquid minus nihil enim dolorem tempore,
            consequuntur ipsa eveniet tenetur quia explicabo velit eaque fuga
            quos quaerat ab facilis minima? Temporibus nesciunt voluptatem,
            reprehenderit fugit eveniet quia, error quos saepe tenetur aliquid
            aliquam nemo dicta pariatur omnis impedit velit, suscipit architecto
            accusantium alias exercitationem dolor dolore! Assumenda neque
            delectus eos eius architecto voluptas atque rerum corporis, ex
            voluptate inventore eligendi dolore, dolores error, pariatur nobis
            porro quibusdam deleniti omnis vero et est! Repudiandae veritatis
            enim exercitationem dolor labore laborum soluta quidem beatae sit.
            Numquam soluta error sapiente dolore laudantium veniam, quaerat nisi
            eaque recusandae est totam qui aliquam earum eos. Fugit quia,
            consequuntur animi amet odio delectus quis dolorem eos neque! Quo a
            vero ut quia ipsa maxime, obcaecati sequi dignissimos! Qui omnis,
            blanditiis vel corporis adipisci culpa facilis labore, sed
            voluptatibus est perspiciatis reiciendis exercitationem maxime
            accusamus voluptatem quo odit provident aperiam! Repudiandae ipsam
            assumenda numquam voluptatibus consectetur animi eum! Praesentium
            ducimus veniam minus harum fugit. Tenetur quibusdam molestiae
            officiis distinctio. Omnis voluptatem quia iste non. Cumque, at
            inventore aperiam, eum dolorem sed provident ea ullam eligendi
            officia fugiat sapiente suscipit iure deleniti temporibus assumenda
            quas? Unde, illo? Maiores, rem! Laboriosam repudiandae error vero
            possimus natus praesentium aspernatur saepe obcaecati maiores
            quibusdam optio, debitis necessitatibus veritatis sequi pariatur est
            soluta sunt, culpa esse aliquam distinctio eveniet! Architecto qui
            numquam possimus blanditiis commodi quidem exercitationem quas
            aspernatur error, ea dolore rem reiciendis labore officiis tenetur
            quia laboriosam? Expedita quidem corrupti numquam, in eum quae neque
            aliquam asperiores doloribus! Quas at eum architecto temporibus
            reiciendis beatae, dolorem magnam officiis, labore error cumque
            expedita nihil perspiciatis a maxime ab quos totam laborum, dolores
            saepe reprehenderit aperiam obcaecati ad. Iste quidem ea beatae
            veritatis consequatur natus corporis, officia molestiae, totam
            voluptates similique sapiente illo ex consequuntur ratione nemo
            aperiam soluta ipsam! Nihil omnis iure molestias neque quia
            inventore repudiandae, corrupti fugiat cum, alias excepturi in
            corporis voluptas. Omnis, nam. Odit maiores rerum velit ea
            perferendis, obcaecati illo corrupti! Beatae aperiam id pariatur
            voluptas non doloribus vel ipsum vitae dolor ea dolore quidem, optio
            quod ratione debitis alias, at nobis maiores quibusdam veritatis
            totam modi reprehenderit consequuntur? Debitis nesciunt autem
            veritatis voluptatum id atque at minus, laboriosam cum ratione,
            cupiditate officia deleniti iure pariatur ab quisquam quam fugiat
            neque maiores vitae ad eos natus consequuntur illo. Ut quibusdam,
            accusamus amet est dolorem, libero excepturi reprehenderit
            accusantium earum totam magni voluptatem officia perspiciatis
            pariatur eos ad repudiandae iusto quisquam exercitationem id
            laudantium quasi minus sunt ea! Perferendis, maiores commodi! Nulla,
            adipisci quos. Velit aut earum dolores nihil eos vitae omnis autem
            nisi, quos, accusamus est temporibus provident.
          </p>
        </div>
        {/*  */}
        <div className="advertisment_container">
          <div className="youtube_video">Youtube Video</div>
          <div className="channel_sec">
            <div className="channel_container">
              <img src={youtube} alt="" />
              <div className="channel_name">
                <h3 className=" text-black">Youtube Channel Name</h3>
                <h6>For Video Content Subscribe Us On Youtube</h6>
              </div>
            </div>
            <div className="subscribe_btn">
              <a href="#">
                Subscribe Channel{" "}
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.193-.538 1.193H5.538c-.538 0-.538-.6-.538-1.193 0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365Zm-8.134 5.368a8.458 8.458 0 0 1 2.252-5.714m14.016 5.714a8.458 8.458 0 0 0-2.252-5.714M8.54 17.901a3.48 3.48 0 0 0 6.92 0H8.54Z"
                  />
                </svg>
              </a>
            </div>
          </div>
          {/* ads */}
          <div className="ads_container">Advertisment</div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
