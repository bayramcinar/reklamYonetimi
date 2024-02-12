import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Swal from 'sweetalert2';

const AdvertInfo = ({ handleButtonClick }) => {
    const [selectedOption, setSelectedOption] = useState('');


    const baslangicTarihiErrorMessage = "Başlangıç tarihini ileriki tarihleden seçiniz."
    const gunlukButceMiktarıErrorMessage = "Günlük bütçe miktarını giriniz"


    const initialValues = {
        reklamTipi: selectedOption,
        reklamAdi: "",
        baslangicTarihi: "",
        bitisTarihi: "",
        butceTipi: "",
        gunlukButceMiktarı: "",
    }
    const validationSchema = Yup.object({
        reklamTipi: Yup.string().required("Lütfen en az birini seçiniz"),
        reklamAdi: Yup.string().required("Lütfen Reklam Adını yazınız"),
        baslangicTarihi: Yup.date().required("Başlangıç tarihi zorunludur").min(new Date()),
        bitisTarihi: Yup.date().min(Yup.ref('baslangicTarihi'), 'Bitiş tarihi başlangıç tarihinden önce olamaz'),
        butceTipi: Yup.string().required("Lütfen bütçe tipini seçiniz"),
        gunlukButceMiktarı: Yup.number().required("Lütfen Miktarı Giriniz"),
    })
    const onSubmit = async (values) => {
        try {
            console.log("form gönderildi", values)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Reklam bilgileri kaydedildi",
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "hata",
                text: "Tüm alanları doldurmalısın",
            });
            console.log(error.message)
        }

    }
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    })
    console.log("selectedOption=>", selectedOption)

    return (
        <form noValidate onSubmit={formik.handleSubmit}>
            <div className='flex flex-col lg:flex-row px-3 py-4 max-w-[1200px] gap-x-3'>
                <div className='flex flex-col md:flex-col lg:flex-col flex-auto w-full lg:w-3/4'>
                    <div className='flex-col lg:flex lg:flex-row flex-auto p-2 gap-x-10'>
                        <div className='flex-col flex-auto w-full lg:w-1/2 py-1'>
                            <h3 className='font-bold'>Reklam Tipi</h3>
                            <p className='text-txtGrey'>Oluşturmak istediğiniz reklam tipini belirleyiniz</p>
                            <div className='mt-3 lg:mt-10'>
                                <select
                                    type="text"
                                    id="reklam"
                                    name="reklamTipi"
                                    {...formik.getFieldProps("reklamTipi")}
                                    onChange={(e) => {
                                        setSelectedOption(e.target.value)
                                        formik.handleChange(e)
                                    }}
                                    value={formik.values.reklamTipi}
                                    className={`w-full rounded-md border ${formik.touched.reklamTipi && formik.errors.reklamTipi ? 'border-b-red-500' : 'border-[#e0e0e0]'} bg-white py-2 px-6 text-base font-medium text-txtGrey outline-none focus:border-lightGray focus:shadow-md`}
                                >
                                    <option value="">Reklam Tipini Seçiniz</option>
                                    <option value="0">Ürün Reklamı Seç</option>
                                    <option value="1">Hizmet Reklamı</option>
                                    <option value="2">Profil Reklamı</option>
                                </select>
                                {formik.touched.reklamTipi && formik.errors.reklamTipi && (
                                    <p className="mt-1 text-sm text-red-500">{formik.errors.reklamTipi}</p>
                                )}
                            </div>
                        </div>
                        <div className='flex-col flex-auto w-full lg:w-1/2 py-1'>
                            <h3 className='font-bold'>Reklam Adı</h3>
                            <p className='pb-3 lg:pb-4 text-txtGrey'>Reklam adı müşteriye gönderilmeyecektir,kendi kontrolünüz için bir isim belirleyebilirsiniz</p>
                            <div className='relative'>
                                <input
                                    type="text"
                                    name="reklamAdi"
                                    id="reklamAdi"
                                    {...formik.getFieldProps("reklamAdi")}
                                    data-isvalid={formik.touched.reklamAdi && !formik.errors.reklamAdi}
                                    isinvalid={formik.touched.reklamAdi && !!formik.errors.reklamAdi ? "true" : "false"}
                                    className={`w-full rounded-md border ${formik.touched.reklamAdi && formik.errors.reklamAdi ? 'border-b-red-500' : 'border-[#e0e0e0]'} bg-white py-1 px-6 text-base font-medium text-txtGrey outline-none focus:border-lightGray focus:shadow-md`}
                                />
                                <label
                                    htmlFor="reklamAdi"
                                    className="mb-3 block text-xs lg:text-sm font-medium text-txtGrey absolute -top-2 left-3"
                                >
                                    Reklam Adı
                                </label>
                                {formik.touched.reklamAdi && formik.errors.reklamAdi && (
                                    <p className="mt-1 text-sm text-red-500">{formik.errors.reklamAdi}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className='flex-col lg:flex lg:flex-row flex-auto p-2'>
                        <div className='flex-col flex-auto w-full lg:w-1/2 py-0 lg:py-1'>
                            <h3 className='font-bold'>Tarih Aralığı</h3>
                            <p className='text-txtGrey mb-4'>Reklam başlangıç ve bitiş tarihlerini belirleyin.Dilerseniz bitiş tarihi olmayan süresiz reklam verebilirsiniz.</p>

                            <div className='flex-col lg:flex lg:flex-row justify-between items-center gap-x-10'>
                                <div className='relative flex flex-auto mb-3'>
                                    <div className='flex-col flex-auto'>
                                        <div className='flex'>
                                            <input
                                                type="date"
                                                name="baslangicTarihi"
                                                id="baslangicTarihi"
                                                {...formik.getFieldProps("baslangicTarihi")}
                                                data-isvalid={formik.touched.baslangicTarihi && !formik.errors.baslangicTarihi}
                                                isinvalid={formik.touched.baslangicTarihi && !!formik.errors.baslangicTarihi}
                                                className={`w-full rounded-md border ${formik.touched.baslangicTarihi && formik.errors.baslangicTarihi ? 'border-b-red-500' : 'border-[#e0e0e0]'} bg-white py-1 px-6 text-base font-medium text-txtGrey outline-none focus:border-lightGray focus:shadow-md`}
                                            />
                                            <label
                                                htmlFor="baslangicTarihi"
                                                className="mb-3 block text-xs lg:text-sm font-medium text-txtGrey absolute -top-2 left-3"
                                            >
                                                Başlangıç Tarihi
                                            </label>
                                        </div>
                                        <div className='flex'>
                                            {formik.touched.baslangicTarihi && formik.errors.baslangicTarihi && (
                                                <p className="mt-1 text-sm text-red-500">
                                                    {baslangicTarihiErrorMessage}
                                                </p>
                                            )}

                                        </div>
                                    </div>
                                </div>

                                <div className='relative flex flex-auto mb-3'>
                                    <div className='flex-col flex-auto'>
                                        <div className='flex'>
                                            <input
                                                type="date"
                                                name="bitisTarihi"
                                                id="bitisTarihi"
                                                {...formik.getFieldProps("bitisTarihi")}
                                                data-isvalid={formik.touched.bitisTarihi && !formik.errors.bitisTarihi}
                                                isinvalid={formik.touched.bitisTarihi && !!formik.errors.bitisTarihi}
                                                className={`w-full rounded-md border ${formik.touched.bitisTarihi && formik.errors.bitisTarihi ? 'border-b-red-500' : 'border-[#e0e0e0]'} bg-white py-1 px-6 text-base font-medium text-txtGrey outline-none focus:border-lightGray focus:shadow-md`}
                                            />
                                            <label
                                                htmlFor="bitisTarihi"
                                                className="mb-3 block text-xs lg:text-sm font-medium text-txtGrey absolute -top-2 left-3"
                                            >
                                                Bitiş Tarihi
                                            </label>
                                        </div>
                                        <div className='flex'>
                                            {formik.touched.bitisTarihi && formik.errors.bitisTarihi && (
                                                <p className="mt-1 text-sm text-red-500">
                                                    {formik.errors.bitisTarihi}
                                                </p>
                                            )}

                                        </div>
                                    </div>
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
                                    <div className={`flex flex-auto justify-around items-center px-1 lg:px-5 py-2.5 bg-grayBg rounded-lg border ${formik.touched.butceTipi && formik.errors.butceTipi ? 'border-b-red-500' : 'border-[#e0e0e0]'}`}>
                                        <div className='flex flex-row'>
                                            <input
                                                type="radio"
                                                name="butceTipi"
                                                id="butce1"
                                                value="0"
                                                checked={formik.values.butceTipi === "0"}
                                                data-isvalid={formik.touched.butceTipi && !formik.errors.butceTipi}
                                                isinvalid={formik.touched.butceTipi && !!formik.errors.butceTipi}
                                                onChange={formik.handleChange}

                                                className="rounded-md border border-[#e0e0e0] bg-white py-1 px-6 text-base font-medium outline-none focus:border-lightGray focus:shadow-md mr-2"
                                            />
                                            <label>Günlük Bütçe</label>
                                        </div>
                                        <div className='flex flex-row'>
                                            <input
                                                type="radio"
                                                id="butce2"
                                                name="butceTipi"
                                                value="1"
                                                data-isvalid={formik.touched.butceTipi && !formik.errors.butceTipi}
                                                isinvalid={formik.touched.butceTipi && !!formik.errors.butceTipi}
                                                checked={formik.values.butceTipi === "1"}
                                                onChange={formik.handleChange}

                                                className="rounded-md border border-[#e0e0e0] bg-white py-1 px-6 text-base font-medium text-txtGrey outline-none focus:border-lightGray focus:shadow-md mr-2"
                                            />
                                            <label>Toplam Bütçe</label>
                                        </div>
                                    </div>
                                    <div>
                                        {formik.touched.butceTipi && formik.errors.butceTipi && (
                                            <p className="mt-1 text-sm text-red-500">
                                                {formik.errors.butceTipi}
                                            </p>
                                        )}
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
                                            <div className="flex-col flex-auto">
                                                <div className="flex">
                                                    <input
                                                        type="text"
                                                        name="gunlukButceMiktarı"
                                                        id="gunlukButceMiktarı"
                                                        {...formik.getFieldProps("gunlukButceMiktarı")}
                                                        data-isvalid={formik.touched.gunlukButceMiktarı && !formik.errors.gunlukButceMiktarı}
                                                        isinvalid={formik.touched.gunlukButceMiktarı && !!formik.errors.gunlukButceMiktarı}
                                                        placeholder='Her ürün için minimum 10₺'
                                                        className={`w-full rounded-md border ${formik.touched.gunlukButceMiktarı && formik.errors.gunlukButceMiktarı ? 'border-b-red-500' : 'border-[#e0e0e0]'} bg-white py-1 px-6 text-base font-medium text-txtGrey outline-none focus:border-lightGray focus:shadow-md`}
                                                    />
                                                    <label
                                                        htmlFor="gunlukButce"
                                                        className="mb-3 block text-xs lg:text-sm font-medium text-txtGrey absolute -top-2 left-3"
                                                    >
                                                        Günlük Bütçe(₺)
                                                    </label>
                                                </div>
                                                <div className="flex">
                                                    {formik.touched.gunlukButceMiktarı && formik.errors.gunlukButceMiktarı && (
                                                        <p className="mt-1 text-sm text-red-500">
                                                            {gunlukButceMiktarıErrorMessage}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
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
                <div>
                    {/* <button 
                    type="submit" 
                    className='bg-red-300 border-red-600'
                    disabled={!(formik.dirty && formik.isValid)}>
                        Submit
                </button> */}
                    <button
                        type="submit"
                        className='bg-red-300 border-red-600'
                    >
                        Submit
                    </button>
                </div>
            </div>
        </form>
    )
}
export default AdvertInfo
