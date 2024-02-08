import React from 'react'

const AdvertInfo = () => {
    return (
        <div className='flex px-3 max-w-[1200px] gap-x-3'>
            <div className='flex-col flex-auto w-2/3'>
                <div className='flex p-2'>
                    <div className='flex-col'>
                        <h3 className='font-bold'>Reklam Tipi</h3>
                        <p className='text-gray-500'>Oluşturmak istediğiniz reklam tipini belirleyiniz</p>
                        <select
                            id="reklam"
                            name="reklam"
                            autoComplete="reklam-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                            <option>Hizmet Reklamı</option>
                            <option>Profil Reklamı</option>
                        </select>
                    </div>
                    <div className='flex-col'>
                        <h3 className='font-bold'>Reklam Adı</h3>
                        <p>Reklam adı müşteriye gönderilmeyecektir,kendi kontrolünüz için bir isim belirleyebilirsiniz</p>
                    </div>
                </div>

                <div className='flex p-2'>
                    <div className='flex-col'>
                        <h3 className='font-bold'>Reklam Tipi</h3>
                        <p>Oluşturmak istediğiniz reklam tipini belirleyiniz</p>
                    </div>
                    <div className='flex'>
                        <div className='flex-col'>
                            <h3 className='font-bold'>Reklam Adı</h3>
                            <p>Reklam adı müşteriye gönderilmeyecektir,kendi kontrolünüz için bir isim belirleyebilirsiniz</p>
                        </div>

                    </div>
                </div>

                <div className='flex p-2'>
                    <div className='flex-col'>
                        <h3 className='font-bold'>Reklam Tipi</h3>
                        <p>Oluşturmak istediğiniz reklam tipini belirleyiniz</p>
                    </div>
                    <div className='flex-col'>
                        <h3 className='font-bold'>Reklam Adı</h3>
                        <p>Reklam adı müşteriye gönderilmeyecektir,kendi kontrolünüz için bir isim belirleyebilirsiniz</p>
                    </div>
                </div>
            </div>
            <div className='flex-col flex-auto w-1/3'>
                <div className='p-2'>
                    <h3 className='font-bold'>Reklam Senaryosu</h3>
                    <p>Bu reklam için günlük en fazla <span className='font-bold'>10tl</span> harcamak istiyorum</p>
                    <p>Oluşturduğum reklam belirttiğim tarihte başlayıp belirlediğim tarihte bitsin</p>
                </div>
                <div className=''>
                    <div className='bg-grayBg p-3 border'>
                        <h3 className='font-bold text-premiumOrange'>Nasıl?</h3>
                        <p>Belirlenen günlük bütçe miktarı reklam oluşturulduğu an reklam bakiyenizden çekilir, reklam süresi boyunca gün sonunda harcanamayan günlük bütçe miktarı reklam bakiyenize iade edilir. Reklam bakiyenizde yeterli tutar olduğu takdirde reklam süresi boyunca hergün bu işlem tekrarlanır.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AdvertInfo