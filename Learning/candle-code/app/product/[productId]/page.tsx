'use client'
import styles from "./page.module.css";
import Image from "next/image";
import axios from 'axios';
import { use, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { create } from 'zustand';
import { PiShoppingCart } from 'react-icons/pi';
import { poppins_300, poppins_500, roboto_400, roboto_500 } from "@/app/fonts";
import QuantityCounter from "@/components/quantityCounter";
import Button from "@/components/button";
import { LoaderBlockout, LoaderBoundingBox } from "@/components/Loaders";
import { Suspense } from "react";
import { Product } from "@/utils/Product";
import { CartItem, Subscription } from "@/utils/userData";
import { POST } from "@/app/api/route";

interface ProductState {
    isLoading: boolean
    setLoading: (nextLaoding: boolean) => void
    product: Product | null
    setProduct: (nextProduct: Product) => void
    count: number
    setCount: (nextCount: number) => void
    price: number
    setPrice: (nextPrice: number) => void
    selectedOption: string
    setSelectedOption: (nextOption: string) => void
    subcriptionLength: number
    setSubscriptionLength: (nextLength: number) => void
}

const useProductStore = create<ProductState>()((set) => ({
    isLoading: true,
    product: null,
    count: 1,
    price: 0.0,
    selectedOption: "subscribe-yes",
    subcriptionLength: 4,
    setLoading: (nextLoading: any) => {
        set((state) => ({
        isLoading:
            typeof nextLoading === 'function'
            ? nextLoading(state.isLoading)
            : nextLoading,
        }))
    },
    setProduct: (nextProduct: any) => {
        set((state) => ({
        product:
            typeof nextProduct === 'function'
            ? nextProduct(state.product)
            : nextProduct,
        }))
    },
    setCount: (nextCount: any) => {
        set((state) => ({
        count:
            typeof nextCount === 'function'
            ? nextCount(state.count)
            : nextCount,
        }))
    },
    setPrice: (nextPrice: any) => {
        set((state) => ({
        price:
            typeof nextPrice === 'function'
            ? nextPrice(state.price)
            : nextPrice,
        }))
    },
    setSelectedOption: (nextOption: any) => {
        set((state) => ({
        selectedOption:
            typeof nextOption === 'function'
            ? nextOption(state.selectedOption)
            : nextOption,
        }))
    },
    setSubscriptionLength: (nextLength: any) => {
        set((state) => ({
        subcriptionLength:
            typeof nextLength === 'function'
            ? nextLength(state.subcriptionLength)
            : nextLength,
        }))
    }
}));

export default function ProductPage() {
    const { productId } = useParams();

    const isLoading = useProductStore((state) => state.isLoading)
    const setLoading = useProductStore((state) => state.setLoading)
    const product = useProductStore((state) => state.product)
    const setProduct = useProductStore((state) => state.setProduct)

    useEffect(() => {
        axios
            .get(`http://localhost:3001/products/${productId}`)
            .then((response) => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <div className={styles.product__left}>
                <div className={styles.product__left__image}>
                    <Suspense fallback={<LoaderBoundingBox />}>
                        <Image priority src="/product-image-big.png" width={540} height={433} alt="Product Image" />
                    </Suspense>
                </div>
                <div className={`${styles.product__left__subtext} ${poppins_500.className}`}>All hand-made with natural soy wax, Candleaf is<br />made for your pleasure moments.<br /></div>
                <div className={`${styles.product__left__subsubtext} ${roboto_500.className}`}>🚚 FREE SHIPPING</div>
            </div>
            <div className={styles.product__info}>
                <div className={`${styles.product__info__title} ${poppins_500.className}`}>
                    {isLoading ? <LoaderBlockout width={400} height={40} />
                        : `${product?.title} Candleaf®`}
                </div>
                <ProductForm product={product} />
                <div className={styles.product__info__purchase__specifics}>
                    <div>Wax: <span className={styles.product__info__grey}>Top grade Soy wax that delivers a smoke less, consistent burn</span></div>
                    <div>Fragrance: <span className={styles.product__info__grey}>Premium quality ingredients with essential oils</span></div>
                    <div>
                        Burning Time: <span className={styles.product__info__grey}> 70-75 hours </span>
                        Dimension: <span className={styles.product__info__grey}> 10cm x 5cm </span>
                        Weight: <span className={styles.product__info__grey}> 400g </span>
                    </div>
                </div>
            </div>
        </>
    );
}

function isProduct(product: Product | null): product is Product {
    return product !== null;
}

function ProductForm({ product }: { product: Product | null }) {
    const count = useProductStore((state) => state.count)
    const setCount = useProductStore((state) => state.setCount)
    const price = useProductStore((state) => state.price)
    const setPrice = useProductStore((state) => state.setPrice)
    const selectedOption = useProductStore((state) => state.selectedOption)
    const setSelectedOption = useProductStore((state) => state.setSelectedOption)
    const subscriptionLength = useProductStore((state) => state.subcriptionLength)
    const setSubscriptionLength = useProductStore((state) => state.setSubscriptionLength)

    useEffect(() => {
        if (!isProduct(product)) {
            return;
        }
        setPrice(product.price * count);
    }, [product, count]);

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value);
    };


    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        // Handle form submission logic here
        if (!isProduct(product)) {
            console.error("Product is not available.");
            return;
        }
        const cartItem = new CartItem(product.id, price, count);
        console.log("Cart item created:", cartItem);
        // If the user chose to subscribe, create a subscription object
        if (selectedOption === "subscribe-yes") {
            let date = new Date();
            date.setDate(date.getDate() + (7 * subscriptionLength)); // 1 week = 7 days
            const subscription = new Subscription(product.id, date, price, subscriptionLength);
            console.log("Subscription created:", subscription);
        }
        // Send the cart item to the server
        let userId = 'icognitoUser'
        POST(`users/${userId}`, cartItem)
        .then((response) => {
            console.log("Cart item sent to server:", response);
        })
        .catch((error) => {
            console.error("Error sending cart item to server:", error);
        });
        console.log('Form submitted!');
    }

    return (
        <div className={`${styles.product__info__purchase} ${roboto_400.className}`}>
            <div className={styles.product__info__purchase__left}>
                <div className={`${styles.product__info__price} ${poppins_300.className}`}>$ {price}</div>
                <div className={styles.product__info__label}>&nbsp;&nbsp;Quantity:</div>
                <QuantityCounter quantity={count} setQuantity={setCount} />
            </div>
            <div className={styles.product__info__purchase__right}>
                <form>
                    <div style={{display:"flex",alignItems:"center", padding:"0 15px 20px"}} onClick={() => setSelectedOption("subscribe-no")}>
                        <input type="radio" name="subscription" 
                                value="subscribe-no"
                                checked={selectedOption === "subscribe-no"}
                                onChange={handleOptionChange} />
                        <label htmlFor="one-time">&nbsp;&nbsp;&nbsp;&nbsp;One time purchase</label>
                    </div>
                    <div className={styles.product__info__subscribe}>
                        <div style={{display:"flex",alignItems:"center"}} onClick={() => setSelectedOption("subscribe-yes")}>
                            <input type="radio" name="subscription"
                                    value="subscribe-yes"
                                    checked={selectedOption === "subscribe-yes"}
                                    onChange={handleOptionChange} />
                            <label htmlFor="subscribe">
                                &nbsp;&nbsp;&nbsp;&nbsp;Subscribe and delivery every &nbsp;&nbsp;
                                <select name="time-weeks" value={subscriptionLength.toString()} onChange={(e) => setSubscriptionLength(parseInt(e.target.value))} style={{backgroundColor:"transparent"}}>
                                    <option value="1">1 week </option>
                                    <option value="2">2 weeks</option>
                                    <option value="3">3 weeks</option>
                                    <option value="4">4 weeks</option>
                                </select><br />
                            </label>
                        </div>
                        <div style={{color:"#818181",paddingTop:"10px"}}>
                            Subscribe now and get the 10% of discount on every recurring order.  The discount will be applied at checkout. <Link href="#">See details</Link>
                        </div>
                    </div>
                    <Button id="addProductButton" onClick={handleSubmit} padding="70px 0 40px" fill={true}><PiShoppingCart style={{fontSize:"26px",paddingRight:"16px"}}/> + Add to Cart</Button>
                </form>
            </div>
            
        </div>
    )

}