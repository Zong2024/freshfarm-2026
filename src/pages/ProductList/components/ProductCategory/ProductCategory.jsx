import { Link, NavLink } from 'react-router-dom'
import { clsx } from 'clsx'
import styles from './ProductCategory.module.scss'
import { useState } from 'react'
const ProductCategory = () => {
  // 電腦版
  const [isOriginOpen, setIsOriginOpen] = useState(true)
  const [isSeasonOpen, setIsSeasonOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // 手機版
  const [isOriginMobileOpen, setIsOriginMobileOpen] = useState(true)
  const [isSeasonMobileOpen, setIsSeasonMobileOpen] = useState(false)
  return (
    <div className="col-lg-3">
      {/*電腦樣式*/}
      <div className="d-none d-lg-block">
        <h1 className="fs-lg-4 pb-lg-12 border-1 border-primary-200 border-bottom">商品分類</h1>
        <ul className="nav flex-column">
          <li className="nav-item border-1 border-primary-200 border-bottom">
            <NavLink
              className={clsx('nav-link fs-5 py-3', styles.classify)}
              aria-current="page"
              to="/products"
            >
              所有商品
            </NavLink>
          </li>
          <div className="accordion" id="accordionExample">
            {/*產地類別*/}
            <div className="accordion-item border-0">
              <div className="accordion-header" id="headingOne">
                <button
                  className={clsx(
                    'accordion-button fs-5 border-1 border-primary-200 rounded-0 border-bottom px-3 d-flex justify-content-between align-items-center',
                    isOriginOpen ? '' : 'collapsed',
                    styles.accordionButton,
                    styles.classify
                  )}
                  type="button"
                  onClick={() => {
                    setIsOriginOpen(!isOriginOpen)
                    setIsSeasonOpen(false) // 互斥展開
                  }}
                >
                  產地
                  <span className={clsx('material-icons text-primary', styles.arrowDown)}>
                    keyboard_arrow_down
                  </span>
                </button>
              </div>
              <div
                id="collapseOne"
                className={clsx('accordion-collapse collapse', isOriginOpen && 'show')}
                aria-labelledby="headingOne"
              >
                <div className="accordion-body bg-primary-100 p-0">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link
                        className={clsx('nav-link text-black px-4 py-3', styles.classifySubitem)}
                        to="/products"
                      >
                        北部
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={clsx('nav-link text-black px-4 py-3', styles.classifySubitem)}
                        to="/products"
                      >
                        中部
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={clsx('nav-link text-black px-4 py-3', styles.classifySubitem)}
                        to="/products"
                      >
                        南部
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={clsx('nav-link text-black px-4 py-3', styles.classifySubitem)}
                        to="/products"
                      >
                        東部
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={clsx('nav-link text-black px-4 py-3', styles.classifySubitem)}
                        to="/products"
                      >
                        離島
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*季節類別*/}
            <div className="accordion-item border-0">
              <div className="accordion-header" id="headingTwo">
                <button
                  className={clsx(
                    'accordion-button collapsed fs-5 border-1 border-primary-200 rounded-0 border-bottom px-3 d-flex justify-content-between align-items-center',
                    isSeasonOpen ? '' : 'collapsed',
                    styles.accordionButton,
                    styles.classify
                  )}
                  type="button"
                  onClick={() => {
                    setIsSeasonOpen(!isSeasonOpen)
                    setIsOriginOpen(false) // 互斥展開
                  }}
                >
                  季節
                  <span className={clsx('material-icons text-primary', styles.arrowDown)}>
                    keyboard_arrow_down
                  </span>
                </button>
              </div>
              <div
                id="collapseTwo"
                className={clsx('accordion-collapse collapse', isSeasonOpen && 'show')}
                aria-labelledby="headingTwo"
              >
                <div className="accordion-body bg-primary-100 p-0">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link
                        className={clsx('nav-link text-black px-4 py-3', styles.classifySubitem)}
                        to="/products"
                      >
                        春季(3~5月)
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={clsx('nav-link text-black px-4 py-3', styles.classifySubitem)}
                        to="/products"
                      >
                        夏季(6~8月)
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={clsx('nav-link text-black px-4 py-3', styles.classifySubitem)}
                        to="/products"
                      >
                        秋季(9~11月)
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={clsx('nav-link text-black px-4 py-3', styles.classifySubitem)}
                        to="/products"
                      >
                        冬季(12~2月)
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className={clsx('nav-link text-black px-4 py-3', styles.classifySubitem)}
                        to="/products"
                      >
                        全年
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <li className="nav-item border-1 border-bottom border-primary-200">
            <Link className={clsx('nav-link fs-5 px-3 py-4', styles.classify)} to="/products">
              有機認證
            </Link>
          </li>
        </ul>
      </div>

      {/*手機樣式*/}
      <div className="dropdown d-lg-none d-block" data-bs-auto-close="outside">
        <button
          className={clsx(
            'btn w-100 border-gray-200 text-gray-300 dropdown-toggle mb-4 d-flex justify-content-between align-items-center',
            styles.dropdownToggle,
            styles.navBorder
          )}
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          商品分類
          <span className="material-icons text-primary">keyboard_arrow_down</span>
        </button>
        {isDropdownOpen && (
          <ul
            className="dropdown-menu p-4 flex-column w-100 border-1 border-primary-200 bg-white rounded-3 show"
            aria-labelledby="dropdownMenuMobile"
            styles={{ marginTop: '1px' }}
          >
            <li className="nav-item mb-2">
              <NavLink
                className={clsx('nav-link fs-6 p-1', styles.classify)}
                aria-current="page"
                to="/products"
              >
                所有商品
              </NavLink>
            </li>
            <div className="accordion" id="accordionMobile">
              {/*產地類別*/}
              <div className="accordion-item border-0 mb-2">
                <div className="accordion-header" id="headingOneMobile">
                  <button
                    className={clsx(
                      'accordion-button fs-6 rounded-0 p-1 mb-1 justify-content-between align-items-center',
                      isOriginMobileOpen ? '' : 'collapsed',
                      styles.accordionButton,
                      styles.classify
                    )}
                    type="button"
                    onClick={() => {
                      setIsOriginMobileOpen(!isOriginMobileOpen)
                      setIsSeasonMobileOpen(false) // 互斥
                    }}
                  >
                    產地
                    <span className={clsx('material-icons text-primary', styles.arrowDown)}>
                      keyboard_arrow_down
                    </span>
                  </button>
                </div>
                <div
                  id="collapseOneMobile"
                  className={clsx('accordion-collapse collapse', isOriginMobileOpen && 'show')}
                  aria-labelledby="headingOneMobile"
                >
                  <div className="accordion-body p-0">
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <Link
                          className={clsx(
                            'nav-link text-primary px-4 py-2',
                            styles.classifySubitem
                          )}
                          to="/products"
                        >
                          北部
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className={clsx(
                            'nav-link text-primary px-4 py-2',
                            styles.classifySubitem
                          )}
                          to="/products"
                        >
                          中部
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className={clsx(
                            'nav-link text-primary px-4 py-2',
                            styles.classifySubitem
                          )}
                          to="/products"
                        >
                          南部
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className={clsx(
                            'nav-link text-primary px-4 py-2',
                            styles.classifySubitem
                          )}
                          to="/products"
                        >
                          東部
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className={clsx(
                            'nav-link text-primary px-4 py-2',
                            styles.classifySubitem
                          )}
                          to="/products"
                        >
                          離島
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*季節類別*/}
              <div className="accordion-item border-0 mb-2">
                <div className="accordion-header" id="headingTwoMobile">
                  <button
                    className={clsx(
                      'accordion-button fs-6 classify rounded-0 p-1 mb-1 justify-content-between align-items-center',
                      isSeasonMobileOpen ? '' : 'collapsed',
                      styles.accordionButton
                    )}
                    type="button"
                    onClick={() => {
                      setIsSeasonMobileOpen(!isSeasonMobileOpen)
                      setIsOriginMobileOpen(false) // 互斥
                    }}
                  >
                    季節
                    <span className={clsx('material-icons text-primary', styles.arrowDown)}>
                      keyboard_arrow_down
                    </span>
                  </button>
                </div>
                <div
                  id="collapseTwoMobile"
                  className={clsx('accordion-collapse collapse', isSeasonMobileOpen && 'show')}
                  aria-labelledby="headingTwoMobile"
                >
                  <div className="accordion-body p-0">
                    <ul className="nav flex-column">
                      <li className="nav-item">
                        <Link
                          className={clsx(
                            'nav-link text-primary px-4 py-2',
                            styles.classifySubitem
                          )}
                          to="/products"
                        >
                          春季(3~5月)
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className={clsx(
                            'nav-link text-primary px-4 py-2',
                            styles.classifySubitem
                          )}
                          to="/products"
                        >
                          夏季(6~8月)
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className={clsx(
                            'nav-link text-primary px-4 py-2',
                            styles.classifySubitem
                          )}
                          to="/products"
                        >
                          秋季(9~11月)
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className={clsx(
                            'nav-link text-primary px-4 py-2',
                            styles.classifySubitem
                          )}
                          to="/products"
                        >
                          冬季(12~2月)
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className={clsx(
                            'nav-link text-primary px-4 py-2',
                            styles.classifySubitem
                          )}
                          to="/products"
                        >
                          全年
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <li className="nav-item">
              <Link className={clsx('nav-link fs-6 p-1', styles.classify)} to="/products">
                有機認證
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  )
}

export default ProductCategory
