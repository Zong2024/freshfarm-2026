import { clsx } from 'clsx'
import styles from './Compare.module.scss'
import { Tooltip } from 'bootstrap'
import CartButton from '@/components/button/CartButton'
import { useEffect, useRef } from 'react'
import { useCompare } from '@/contexts/CompareContext'
const Compare = () => {
  const { comparedItems, clearCompare, removeCompare } = useCompare()
  const nonCompare = comparedItems.length === 0
  const showCompareArea = comparedItems.length > 0
  const ref = useRef()

  useEffect(() => {
    const tooltip = new Tooltip(ref.current)
    return () => tooltip.dispose()
  }, [])
  return (
    <section className={clsx('bg-primary-50 py-8 py-lg-9', styles.compareBg)}>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center gap-2 mb-7 mb-lg-8">
          <h2 className="fs-4 fs-lg-2">商品比較</h2>
          <span
            ref={ref}
            title="最多可選擇 3 個商品進行比較"
            style={{ cursor: 'pointer' }}
            className="material-icons text-primary fs-lg-2 align-bottom"
          >
            info
          </span>
        </div>
        {nonCompare && (
          <div className="bg-white p-5">
            <h4 className="fs-6 fs-lg-3 py-6 px-3 text-gray-300 text-center">
              您尚未選擇任何商品來進行比較
            </h4>
          </div>
        )}
      </div>

      {showCompareArea && (
        <>
          <div className={clsx('container bg-white', styles.tableShadow)}>
            <div className="p-5 d-none d-md-block">
              <div className="d-flex flex-row-reverse mb-6">
                <button
                  type="button"
                  onClick={clearCompare}
                  className="btn btn-gray-100 border-1 border-gray-200 fs-6 fw-bold px-6"
                >
                  一鍵清空比較
                </button>
              </div>

              <table
                className="table table-borderless text-center"
                style={{ tableLayout: 'fixed' }}
              >
                <thead>
                  <tr className={styles.tableSecondar50}>
                    <th scope="col" className="text-gray-400 align-middle">
                      項目
                    </th>
                    {comparedItems.map(item => (
                      <th scope="col" className="text-primary py-3" key={item.id}>
                        {item.title}
                        <span
                          className="material-icons text-danger align-bottom ms-2"
                          role="button"
                          tabIndex={0}
                          aria-label="移除比較項目"
                          onClick={() => removeCompare(item.id)}
                          onKeyDown={e => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              removeCompare(item.id)
                            }
                          }}
                        >
                          remove_circle
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="text-gray-400 fw-normal py-6 align-middle">
                      商品圖片
                    </th>
                    {comparedItems.map(item => (
                      <td className="py-6" key={item.id}>
                        <img
                          className="rounded-3 w-100 object-fit-cover"
                          src={item.imageUrl}
                          alt={`${item.table}圖片`}
                          style={{ aspectRatio: 1.45 }}
                        />
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row" className="text-gray-400 fw-normal py-6 align-middle">
                      價格
                    </th>
                    {comparedItems.map(item => (
                      <td className="py-6" key={item.id}>
                        NT$ {item.price}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row" className="text-gray-400 fw-normal py-6 align-middle">
                      產地
                    </th>
                    {comparedItems.map(item => (
                      <td className="py-6" key={item.id}>
                        {item.origin}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row" className="text-gray-400 fw-normal py-6 align-middle">
                      認證標章
                    </th>
                    {comparedItems.map(item => (
                      <td className="py-6" key={item.id}>
                        產銷履歷
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row" className="text-gray-400 fw-normal py-6 align-middle">
                      保存方式
                    </th>
                    {comparedItems.map(item => (
                      <td className="py-6" key={item.id}>
                        {item.storage_method}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row" className="text-gray-400 fw-normal py-6 align-middle">
                      推薦用途
                    </th>
                    {comparedItems.map(item => (
                      <td className="py-6" key={item.id}>
                        {item.eating_tips}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th scope="row" className="text-gray-400 fw-normal py-6 align-middle">
                      操作
                    </th>
                    {comparedItems.map(item => (
                      <td className="py-6" key={item.id}>
                        <CartButton />
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="container">
            {/*手機樣式*/}
            <div className="d-block d-md-none">
              {comparedItems.map(item => (
                <div className="card border-0 p-3 cardShadow mb-6" key={item.id}>
                  <div className="d-flex justify-content-between mb-2">
                    <h5 className="fs-6 text-primary">{item.title}</h5>
                    <span
                      className="material-icons text-danger align-bottom ms-2"
                      role="button"
                      tabIndex={0}
                      aria-label="移除比較項目"
                      onClick={() => removeCompare(item.id)}
                      onKeyDown={e => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          removeCompare(item.id)
                        }
                      }}
                    >
                      remove_circle
                    </span>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <img
                      className={clsx('rounded-3 me-2 object-fit-cover', styles.compareMobileImg)}
                      src={item.imageUrl}
                      alt={`${item.title}圖片`}
                    />
                    <div>
                      <div className="d-flex mb-1 align-items-center gap-1">
                        <span className="material-icons fs-6 text-gray-300">attach_money</span>
                        <p>NT$ {item.price}</p>
                      </div>
                      <div className="d-flex align-items-center gap-1">
                        <span className="material-icons fs-6 text-gray-300">location_on</span>
                        <p>{item.origin}</p>
                      </div>
                    </div>
                  </div>

                  <div className="card-body p-0">
                    <ul className="list-unstyled mb-2">
                      <li className="mb-2">
                        <span className="fs-8 text-gray-400 me-4">認證標章</span>
                        <span>產銷履歷</span>
                      </li>
                      <li className="mb-2">
                        <span className="fs-8 text-gray-400 me-4">保存方式</span>
                        <span>{item.storage_method}</span>
                      </li>
                      <li>
                        <span className="fs-8 text-gray-400 me-4">推薦用途</span>
                        <span>{item.eating_tips}</span>
                      </li>
                    </ul>
                    <CartButton />
                  </div>
                </div>
              ))}
              <button
                type="button"
                className="btn btn-gray-100 border-1 border-gray-200 fw-bold w-100"
                onClick={clearCompare}
              >
                一鍵清空比較
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  )
}

export default Compare
