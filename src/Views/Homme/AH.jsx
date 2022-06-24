import { useEffect } from "react"
import ArticleService from "../../Services/ArticlesService"
import { useState } from "react"
import "./homme.css"
import { Link } from "react-router-dom"

const AHomme = () => {
  const [articles, setArt] = useState([])
  const [handleClick] = useState([])
  const getbytypeAH = () => {
    ArticleService.getbytypeAH().then(res => {
      console.log("response >>>>", res)
      setArt(res.data.data)
    }).catch(err => {
      console.log(err)
    })

  }

  useEffect(() => {
    getbytypeAH()
  }, [])
    return(
        <>
{/* Start Single Tab */}
<div role="tabpanel">
        <div className="tab-singleh">
          <div className="row">
            {articles.map((item, key) => {
              return (
                <div className="col-xl-3 col-lg-4 col-md-4 col-12" key={key}>
                  <div className="single-product">
                    <div className="product-img">
                    <Link to={`/detailsPdt/${item._id}`}>
                      {item.image && (
                          <img className="default-img" style={{ height: "300px" }} src={'http://localhost:5010/getImage/' + item.image}
                       />
                        )}
                       
                      </Link>
                      <div className="button-head">
                            <div className="product-action">
                              <a title="Favoris" href="#"><i className=" ti-heart "/><span>Ajouter au favoris</span></a>
                            </div>
                            <div className="product-action-2">
                            <button type="button" class="btne btn-dark" onClick={() => handleClick(item)}>Ajouter au panier</button>
                            </div>
                          </div>
                    </div>
                    <div className="product-content">
                    <p><strong>{item.description}</strong></p>
                      <div className="product-price">
                      <span><strong>{item.prix} Dt</strong></span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
            }
          </div>
        </div>
      </div>
{/*/ End Single Tab */}

</>
    )
}
export default AHomme

