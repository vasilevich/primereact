import React, { Component } from 'react';
import Head from 'next/head';
import getConfig from 'next/config';

const SupportPage = () => {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    return (
        <div className="content-section">
            <img alt="PRO Support" src="/images/support/support-header.png" className="w-full block mb-5" style={{ borderRadius: '20px' }} />

            <div className="flex flex-column xl:flex-row mb-5 gap-5">
                <div className="card xl:w-3 m-0 relative overflow-hidden">
                    <i className="pi pi-github absolute text-200" style={{ bottom: '-50px', right: '-50px', fontSize: '200px', transform: 'rotateX(45deg) rotateY(0deg) rotateZ(-45deg)' }}></i>
                    <div className="text-xl text-900 font-semibold mb-3 relative">Community Support</div>
                    <p className="m-0 line-height-3 relative">
                        <a href="https://forum.primefaces.org/viewforum.php?f=35" className="font-bold hover:underline text-primary">
                            Forum
                        </a>{' '}
                        and{' '}
                        <a href="https://discord.gg/gzKFYnpmCY" className="font-bold hover:underline text-primary">
                            Discord
                        </a>{' '}
                        are where the community users gather to seek support, post topics and discuss the technology. GitHub issue tracker is the channel where community users can create tickets however PrimeTek does not guarantee a response time
                        although they are monitored and maintained by our staff. If you need to secure our response within 1 business day, you may consider PRO support instead.
                    </p>
                </div>
                <div className="card m-0 xl:w-9 text-white bg-cover" style={{ backgroundImage: 'url(/images/support/card-pro.jpg)' }}>
                    <div className="text-xl font-semibold mb-3">PRO Support</div>
                    <p className="m-0 line-height-3">
                        With PRO support, it's easy to support, tune and add features to PrimeNG as if it were an in- house library. PRO is a term based commercial support service. With the exclusive services of PRO account, it is no longer needed to
                        post questions in community forum and issue reports to community issue tracker at GitHub. A JIRA account will be created to the customer by PrimeTek, this account can be shared between any number of users within your
                        organization.
                    </p>
                </div>
            </div>
            <div className="grid mb-5">
                <div className="col-12 md:col-6 xl:col-3">
                    <div className="card m-0 flex-1 h-full">
                        <div className="text-xl text-900 font-semibold mb-3">Free</div>
                        <p className="m-0 line-height-3 mb-3 text-secondary">Community Support</p>
                        <a href="https://discord.com/invite/gzKFYnpmCY" className="flex align-items-center justify-content-center border-1 border-indigo-500 border-round block p-3 mb-4 text-indigo-500 font-medium hover:surface-hover">
                            Join Now
                        </a>
                        <ul className="list-none p-0 m-0">
                            <li className="flex align-items-center mb-3">
                                <i className="pi pi-check-circle mr-2 text-green-500"></i>
                                <span>GitHub Issue Tracker</span>
                            </li>
                            <li className="flex align-items-center mb-3">
                                <i className="pi pi-check-circle mr-2 text-green-500"></i>
                                <span>Community Forum</span>
                            </li>
                            <li className="flex align-items-center">
                                <i className="pi pi-check-circle mr-2 text-green-500"></i>
                                <span>PrimeLand Discord Server</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 md:col-6 xl:col-3">
                    <div className="card m-0 flex-1 h-full">
                        <div className="text-xl text-900 font-semibold mb-3">Standard</div>
                        <p className="m-0 line-height-3 mb-3 text-secondary">1 Year Subscription</p>
                        <a
                            href="mailto:primeng@primetek.com.tr"
                            className="flex align-items-center justify-content-center border-1 bg-indigo-500 border-round block p-3 mb-4 hover:bg-indigo-600 transition-all transition-duration-300 text-white font-medium"
                        >
                            Get a Quote
                        </a>
                        <ul className="list-none p-0 m-0">
                            <li className="flex align-items-center mb-3">
                                <i className="pi pi-check-circle mr-2 text-green-500"></i>
                                <span>Access to Private JIRA</span>
                            </li>
                            <li className="flex align-items-center mb-3">
                                <i className="pi pi-check-circle mr-2 text-green-500"></i>
                                <span>Response within 1 business day</span>
                            </li>
                            <li className="flex align-items-center mb-3">
                                <i className="pi pi-check-circle mr-2 text-green-500"></i>
                                <span>
                                    <strong>10</strong> Issue Tickets
                                </span>
                            </li>
                            <li className="flex align-items-center">
                                <i className="pi pi-check-circle mr-2 text-green-500"></i>
                                <span>Access to LTS Releases</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 md:col-6 xl:col-3">
                    <div className="card m-0 flex-1 h-full">
                        <div className="text-xl text-900 font-semibold mb-3">Premium</div>
                        <p className="m-0 line-height-3 mb-3 text-secondary">1 Year Subscription</p>
                        <a
                            href="mailto:primeng@primetek.com.tr"
                            className="flex align-items-center justify-content-center border-1 bg-indigo-500 border-round block p-3 mb-4 hover:bg-indigo-600 transition-all transition-duration-300 text-white font-medium"
                        >
                            Get a Quote
                        </a>
                        <ul className="list-none p-0 m-0">
                            <li className="flex align-items-center mb-3">
                                <i className="pi pi-check-circle mr-2 text-green-500"></i>
                                <span>Access to Private JIRA</span>
                            </li>
                            <li className="flex align-items-center mb-3">
                                <i className="pi pi-check-circle mr-2 text-green-500"></i>
                                <span>Response within 1 business day</span>
                            </li>
                            <li className="flex align-items-center mb-3">
                                <i className="pi pi-check-circle mr-2 text-green-500"></i>
                                <span>
                                    <strong>30</strong> Issue Tickets
                                </span>
                            </li>
                            <li className="flex align-items-center mb-3">
                                <i className="pi pi-check-circle mr-2 text-green-500"></i>
                                <span>Access to LTS Releases</span>
                            </li>
                            <li className="flex align-items-center">
                                <i className="pi pi-check-circle mr-2 text-green-500"></i>
                                <span>Theme Designer - Extended License</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 md:col-6 xl:col-3">
                    <div className="card m-0 flex-1 border-2 border-indigo-500 h-full">
                        <div className="text-xl text-900 font-semibold mb-3">Enterprise</div>
                        <p className="m-0 line-height-3 mb-3 text-secondary">1 Year Subscription</p>
                        <a
                            href="mailto:primeng@primetek.com.tr"
                            className="flex align-items-center justify-content-center border-1 bg-indigo-500 border-round block p-3 mb-4 hover:bg-indigo-600 transition-all transition-duration-300 text-white font-medium"
                        >
                            Get a Quote
                        </a>
                        <ul className="list-none p-0 m-0">
                            <li className="flex align-items-center mb-3">
                                <i className="pi pi-check-circle mr-2 text-green-500"></i>
                                <span>Access to Private JIRA</span>
                            </li>
                            <li className="flex align-items-center mb-3">
                                <i className="pi pi-check-circle mr-2 text-green-500"></i>
                                <span>Response within 1 business day</span>
                            </li>
                            <li className="flex align-items-center mb-3">
                                <i className="pi pi-check-circle mr-2 text-green-500"></i>
                                <span>
                                    <strong>Unlimited</strong> Issue Tickets
                                </span>
                            </li>
                            <li className="flex align-items-center mb-3">
                                <i className="pi pi-check-circle mr-2 text-green-500"></i>
                                <span>Access to LTS Releases</span>
                            </li>
                            <li className="flex align-items-center mb-3">
                                <i className="pi pi-check-circle mr-2 text-green-500"></i>
                                <span>Theme Designer - Extended License</span>
                            </li>
                            <li className="flex align-items-center mb-3">
                                <i className="pi pi-check-circle mr-2 text-green-500"></i>
                                <span>PrimeBlocks - Enterprise License</span>
                            </li>
                            <li className="flex align-items-center mb-3">
                                <i className="pi pi-check-circle mr-2 text-green-500"></i>
                                <span>PrimeBlocks - Enterprise License</span>
                            </li>
                            <li className="flex align-items-center">
                                <i className="pi pi-check-circle mr-2 text-green-500"></i>
                                <span>Figma UI Kit - Enterprise License</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="card mb-5">
                <div className="text-xl text-900 font-semibold mb-3">Enhancement Credits</div>
                <p className="m-0 line-height-3 mb-5 text-secondary">
                    New features and enhancement requests are not available in core services and provided via a credit based model instead named PrimeCredit. When you have a feature request, we offer an initial estimate in terms of credits and once
                    this estimate is confirmed by you then implementation will be delivered by our team within an estimated timeframe.
                </p>

                <div className="flex flex-column md:flex-row gap-5">
                    <div className="flex-1">
                        <div className="text-900 font-semibold mb-2">New Components</div>
                        <p className="m-0 line-height-3 mb-3 text-secondary">Brand new components you need that are not already available in the existing UI suite.</p>
                    </div>
                    <div className="flex-1">
                        <div className="text-900  font-semibold mb-2">New Features</div>
                        <p className="m-0 line-height-3 mb-3 text-secondary">Enhancements to the components you need such as new properties, events and templating.</p>
                    </div>
                    <div className="flex-1">
                        <div className="text-900  font-semibold mb-2">UX Customization</div>
                        <p className="m-0 line-height-3 mb-3 text-secondary">Behavioral changes to the existing components.</p>
                    </div>
                </div>
            </div>

            <div className="card m-0">
                <div className="text-xl text-900 font-semibold mb-3">Frequently Asked Questions</div>
                <div className="grid">
                    <div className="col-12 lg:col-4">
                        <div className="text-900 line-height-3 mb-2 font-medium">What are the conditions for support service to end?</div>
                        <p className="mt-0 mb-6 p-0 line-height-3 text-secondary">Support service ends either after 1 year end for all plans or when all tickets are used in Standard or Premium plans.</p>

                        <div className="text-900 line-height-3 mb-2 font-medium">Is there a plan with no ticket limit?</div>
                        <p className="mt-0 mb-6 p-0 line-height-3 text-secondary">Yes, the Enterprise plan has no limitation on the number of tickets.</p>

                        <div className="text-900 line-height-3 mb-2 font-medium">What happens if we extend after 1 year and we have unused tickets?</div>
                        <p className="mt-0 mb-6 p-0 line-height-3 text-secondary">Unused tickets expire and cannot be transferred to the new subscription.</p>
                    </div>
                    <div className="col-12 lg:col-4">
                        <div className="text-900 line-height-3 mb-2 font-medium">When can we purchase PrimeCredits for feature development?</div>
                        <p className="mt-0 mb-6 p-0 line-height-3 text-secondary">PrimeCredits can be purchased anytime during an active subscription.</p>

                        <div className="text-900 line-height-3 mb-2 font-medium">Are all of our requests guaranteed to be implemented with PrimeCredits?</div>
                        <p className="mt-0 mb-6 p-0 line-height-3 text-secondary">No, PrimeTek does not guarantee the implementation so it is suggested to confirm with us before purchasing credits.</p>

                        <div className="text-900 line-height-3 mb-2 font-medium">Can we get PrimeCredits without PRO support?</div>
                        <p className="mt-0 mb-6 p-0 line-height-3 text-secondary">No, feature development is exclusive to PRO members.</p>
                    </div>
                    <div className="col-12 lg:col-4">
                        <div className="text-900 line-height-3 mb-2 font-medium">Is there a limit on developers in our organization who can use the service?</div>
                        <p className="mt-0 mb-6 p-0 line-height-3 text-secondary">PRO is per organization so there is no limit on the number of developers.</p>

                        <div className="text-900 line-height-3 mb-2 font-medium">How many JIRA accounts do we get?</div>
                        <p className="mt-0 mb-6 p-0 line-height-3 text-secondary">We provide one shared account per organization that any number of members in your organization can use it.</p>

                        <div className="text-900 line-height-3 mb-2 font-medium">What is not covered by PRO?</div>
                        <p className="mt-0 mb-6 p-0 line-height-3 text-secondary">As PRO support focuses on the library, application consulting and code reviews are out of scope.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportPage;
