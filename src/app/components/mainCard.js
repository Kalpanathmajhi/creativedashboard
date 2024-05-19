import { Card } from '@tremor/react';
import { Button } from '@tremor/react';
import style from "../components/minCard.module.css";
import Image from 'next/image';

export function CardHero() {
    return (
        <div className={style.cardContainer}>
            <Card className="mx-auto max-w-xs">
                <div className="text-center">
                    <Image
                        src="/assets/Free.png"
                        alt="Creative Logo"
                        className="mx-auto"
                        width={100}
                        height={10}
                    />
                </div>
                <p className="text-center text-slate-400"><b>Free Plan</b></p>
                <div className={style.cardText}>
                    <div className="flex items-center">
                        <Image src="/assets/tick.png" alt="tick"   width={10}
                        height={10}/>
                        <p className="text-slate-400">Free User</p>
                    </div>
                    <div className="flex items-center">
                        <Image src="/assets/tick.png" alt="tick" width={10}
                        height={10}/>
                        <p className="text-slate-400">Works on 1 Device at once</p>
                    </div>
                </div>
                <div className={style.bottomText}>
                    <p className="text-center"><b>Free</b></p>
                    <div className="flex justify-center">
                        <Button variant="secondary">Select</Button>
                    </div>
                </div>
            </Card>
            <Card className="mx-auto max-w-xs">
                <div className="text-center">
                    <Image
                        src="/assets/Free.png"
                        alt="Creative Logo"
                        className="mx-auto"
                        width={100}
                        height={10}
                    />
                </div>
                <p className="text-center text-slate-400"><b>Standard Plan</b></p>
                <div className={style.cardText}>
                    <div className="flex items-center">
                        <Image src="/assets/tick.png" alt="tick" width={10}
                        height={10}/>
                        <p className="text-slate-400">Limited people</p>
                    </div>
                    <div className="flex items-center">
                        <Image src="/assets/tick.png" alt="tick" width={10}
                        height={10}/>
                        <p className="text-slate-400">Works on 1 Device at once</p>
                    </div>
                    <div className="flex items-center">
                        <Image src="/assets/tick.png" alt="tick" width={10}
                        height={10}/>
                        <p className="text-slate-400">Connect Anyware</p>
                    </div>
                </div>
                <div className={style.bottomText}>
                <p className="text-center">$9 / mo</p>
                <div className="flex justify-center">
                    <Button variant="secondary">Select</Button>
                </div>
                </div>
            </Card>
            <Card className="mx-auto max-w-xs">
                <div className="text-center">
                    <Image
                        src="/assets/Free.png"
                        alt="Creative Logo"
                        className="mx-auto"
                        width={100}
                        height={10}
                    />
                </div>
                <p className="text-center text-slate-400"><b>Premium Plan</b></p>
                <div className={style.cardText}>
                    <div className="flex items-center">
                        <Image src="/assets/tick.png" alt="tick" width={10}
                        height={10}/>
                        <p className="text-slate-400">All Creative Heads</p>
                    </div>
                    <div className="flex items-center">
                        <Image src="/assets/tick.png" alt="tick" width={10}
                        height={10}/>
                        <p className="text-slate-400">Works on All Devices</p>
                    </div>
                    <div className="flex items-center">
                        <Image src="/assets/tick.png" alt="tick" width={10}
                        height={10}/>
                        <p className="text-slate-400">Connect Anyware</p>
                    </div>
                    <div className="flex items-center">
                        <Image src="/assets/tick.png" alt="tick" width={10}
                        height={10}/>
                        <p className="text-slate-400">Get New Features</p>
                    </div>
                </div>
                <div className={style.bottomText}>
                <p className="text-center">$12 / mo</p>
                <div className="flex justify-center">
                    <Button variant="primary">Select</Button>
                </div>
                </div>
            </Card>

        </div>
    );
}