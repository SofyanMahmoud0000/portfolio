import config from "../config";
import { GoPrimitiveDot, GoDash } from 'react-icons/go';
import { skeleton } from "../helpers/utils";
import { useContext } from "react";
import { LoadingContext } from "../contexts/LoadingContext";

const AboutMe = () => {
    const [loading] = useContext(LoadingContext);

    const renderSkeleton = () => {
        let array = [];
        for (let index = 0; index < 2; index++) {
            array.push((
                <li key={index}>
                    <span>
                        {skeleton({ width: 'w-2', height: 'h-2', className: "mr-2" })}
                        <div className="w-full">
                            <div className="block justify-between">
                                <div>
                                    {skeleton({ width: 'w-9/12', height: 'h-4', className: "mb-2" })}
                                </div>
                                <div>
                                    {skeleton({ width: 'w-6/12', height: 'h-4', className: "mb-2" })}
                                </div>
                            </div>
                            <div>
                                {skeleton({ width: 'w-6/12', height: 'h-3' })}
                            </div>
                        </div>
                    </span>
                </li>
            ))
        }

        return array;
    }

    return (
        <>
            {
                (typeof config.experiences !== 'undefined' && config.experiences.length !== 0) && (
                    <div className="card shadow-lg compact bg-base-100">
                        <div className="card-body">
                            <ul className="menu row-span-3 bg-base-100 text-base-content">
                                <li>
                                    <div className="pb-0-important mx-3">
                                        <h5 className="card-title">
                                            {
                                                loading ? skeleton({width: 'w-32', height: 'h-8'}) : (
                                                    <span className="opacity-70">👋  I'm Sofyan Mahmoud</span>
                                                )
                                            }
                                        </h5>
                                    </div>
                                </li>
                                {
                                    loading ? renderSkeleton() : (
                                        config.aboutMe.map((fact, index) => (
                                            <li key={index}>
                                                <span>
                                                    {/* <div>
                                                        <GoDash className="mr-2 opacity-40"/>
                                                    </div> */}
                                                    <div>
                                                        <div className="block justify-between">
                                                            <div style={{fontSize:"larger"}} className="font-large opacity-70">
                                                                {fact}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </span>
                                            </li>
                                        ))
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default AboutMe;