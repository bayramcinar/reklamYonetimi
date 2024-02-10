import React, { useState } from 'react'

const AdvertInfo = () => {
    const [selectedOption, setSelectedOption] = useState('');
    console.log("selectedOption=>", selectedOption)
    return (
        <div className='flex flex-col lg:flex-row px-3 py-4 max-w-[1200px] gap-x-3'>
            <div className='flex flex-col md:flex-col lg:flex-col flex-auto w-full lg:w-3/4'>
                <div className='flex-col lg:flex lg:flex-row flex-auto p-2 gap-x-10'>
                    <div className='flex-col flex-auto w-full lg:w-1/2 py-1'>
                        <h3 className='font-bold'>Reklam Tipi</h3>
                        <p className='text-txtGrey'>Oluşturmak istediğiniz reklam tipini belirleyiniz</p>
                        <div className='mt-3 lg:mt-10'>
                            <select
                                id="reklam"
                                name="reklam"
                                autoComplete="reklam-name"
                                onChange={(e) => setSelectedOption(e.target.value)}
                                // className="block w-full rounded-md border-0 py-2 px-5 text-txtGrey shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-premiumOrange sm:max-w-xs sm:text-sm sm:leading-6"
                                className='w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-txtGrey outline-none focus:border-lightGray focus:shadow-md'
                            >
                                <option value="">Reklam Türünü Seçiniz</option>
                                <option value="Ürün Reklamı">Ürün Reklamı Seç</option>
                                <option value="Hizmet Reklamı">Hizmet Reklamı</option>
                                <option value="Profil Reklamı">Profil Reklamı</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex-col flex-auto w-full lg:w-1/2 py-1'>
                        <h3 className='font-bold'>Reklam Adı</h3>
                        <p className='pb-3 lg:pb-4 text-txtGrey'>Reklam adı müşteriye gönderilmeyecektir,kendi kontrolünüz için bir isim belirleyebilirsiniz</p>
                        <div className='relative'>
                            <input
                                type="text"
                                name="rName"
                                id="rName"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-1.5 px-6 text-base font-medium text-txtGrey outline-none focus:border-lightGray focus:shadow-md"
                            />
                            <label
                                for="rName"
                                className="mb-3 block text-xs lg:text-sm font-medium text-txtGrey absolute -top-2 left-3"
                            >
                                Reklam Adı
                            </label>
                        </div>
                    </div>
                </div>

                <div className='flex-col lg:flex lg:flex-row flex-auto p-2'>
                    <div className='flex-col flex-auto w-full lg:w-1/2 py-0 lg:py-1'>
                        <h3 className='font-bold'>Tarih Aralığı</h3>
                        <p className='text-txtGrey mb-4'>Reklam başlangıç ve bitiş tarihlerini belirleyin.Dilerseniz bitiş tarihi olmayan süresiz reklam verebilirsiniz.</p>
                        <div className='flex-col lg:flex lg:flex-row justify-between items-center gap-x-10'>
                            <div className='relative flex flex-auto mb-3'>
                                <input
                                    type="date"
                                    name="sDate"
                                    id="sDate"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-1.5 px-6 text-base font-medium text-txtGrey outline-none focus:border-lightGray focus:shadow-md"
                                />
                                <label
                                    for="sDate"
                                    className="mb-3 block text-xs lg:text-sm font-medium text-txtGrey absolute -top-2 left-3"
                                >
                                    Başlangıç Tarihi
                                </label>
                            </div>

                            <div className='relative flex flex-auto mb-3'>
                                <input
                                    type="date"
                                    name="eDate"
                                    id="eDate"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-1.5 px-6 text-base font-medium text-txtGrey outline-none focus:border-lightGray focus:shadow-md"
                                />
                                <label
                                    for="eDate"
                                    className="mb-3 block text-xs lg:text-sm font-medium text-txtGrey absolute -top-2 left-3"
                                >
                                    Bitiş Tarihi
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex-col lg:flex lg:flex-row flex-auto w-full p-2'>
                     <div className='flex-col flex-auto w-full lg:w-1/2 py-1'>
                        <div className='flex-col lg:flex lg:flex-row justify-between items-center gap-x-10'>
                            <div className='butce flex-col flex-auto w-full lg:w-1/2 mb-1'>
                                <div className='flex-col mb-3 lg:mb-8'>
                                    <div className='flex flex-auto '>
                                        <h3 className='font-bold'>Bütçe Tipi</h3>
                                    </div>
                                    <div className=' flex flex-auto '>
                                        <p className="text-txtGrey">Oluşturmak istediğiniz reklamın bütçe tipini seçiniz</p>
                                    </div>
                                </div>
                                <div className='flex flex-auto justify-around items-center px-1 lg:px-5 py-2.5 bg-grayBg rounded-lg'>
                                    <div className='flex flex-row'>
                                        <input
                                            type="radio"
                                            name="butce"
                                            id="butce1"
                                            className="rounded-md border border-[#e0e0e0] bg-white py-1 px-6 text-base font-medium outline-none focus:border-lightGray focus:shadow-md mr-2"
                                        />
                                        <label>Günlük Bütçe</label>
                                    </div>
                                    <div className='flex flex-row'>
                                        <input
                                            type="radio"
                                            name="butce"
                                            id="butce2"
                                            className="rounded-md border border-[#e0e0e0] bg-white py-1 px-6 text-base font-medium text-txtGrey outline-none focus:border-lightGray focus:shadow-md mr-2"
                                        />
                                        <label>Toplam Bütçe</label>
                                    </div>
                                </div>
                            </div>

                            <div className='butce flex-col flex-auto w-full lg:w-1/2 mb-1'>
                                <div className='flex-col'>
                                    <div className='flex'>
                                        <h3 className="font-bold">
                                            Günlük Reklam Bütçesi
                                        </h3>
                                    </div>
                                    <div className='flex mb-3'>
                                        <p className='text-txtGrey'>Reklam için ayıracağınız günlük bütçeyi belirleyin.Bütçeniz arttıkça görününürlüğünüz artar!</p>
                                    </div>
                                </div>
                                <div className='flex flex-row'>
                                    <div className='flex flex-auto relative'>
                                        <input
                                            type="text"
                                            name="gButce"
                                            id="gButce"
                                            placeholder='Her ürün için minimum 10₺'
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-1.5 px-10 text-base font-medium text-txtGrey outline-none focus:border-lightGray focus:shadow-md"
                                        />
                                        <label
                                            for="gButce"
                                            className="mb-3 block text-xs lg:text-sm font-medium text-txtGrey absolute -top-2 left-3"
                                        >
                                            Günlük Bütçe(₺)
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    
                </div>
            </div>
            <div className='flex flex-col lg:flex-col flex-auto w-full lg:w-1/4'>
                <div className='p-3'>
                    <h3 className='font-bold'>Reklam Senaryosu</h3>
                    <p className='text-txtGrey'>Bu reklam için günlük en fazla <span className='font-bold'>10tl</span> harcamak istiyorum</p>
                    <p className='text-txtGrey'>Oluşturduğum reklam belirttiğim tarihte başlayıp belirlediğim tarihte bitsin</p>
                </div>
                <div className='bg-grayBg p-3 border rounded-lg'>
                    <h3 className='font-bold text-premiumOrange'>Nasıl?</h3>
                    <p className='text-txtGrey'>Belirlenen günlük bütçe miktarı reklam oluşturulduğu an reklam bakiyenizden çekilir, reklam süresi boyunca gün sonunda harcanamayan günlük bütçe miktarı reklam bakiyenize iade edilir. Reklam bakiyenizde yeterli tutar olduğu takdirde reklam süresi boyunca hergün bu işlem tekrarlanır.</p>
                </div>
            </div>
        </div>
    )
}
export default AdvertInfo


