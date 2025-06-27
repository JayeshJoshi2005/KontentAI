"use client";
import { Button } from '@/components/ui/button';
import React, { useContext, useState } from 'react';
import { Loader2Icon } from 'lucide-react';
import { db } from '@/utils/db';
import { UserSubscription } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { UserSubscriptionContext } from '@/app/(context)/UserSubscriptionContext';

function Billing() {
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);

  const CreateSubscription = async () => {
    setLoading(true);
    try {
      const result = await db.insert(UserSubscription).values({
        email: user?.primaryEmailAddress?.emailAddress,
        userName: user?.fullName,
        active: true,
        paymentId: 'mock_payment_id',
        joinDate: moment().format('DD/MM/yyyy'),
      });

      console.log(result);
      if (result) window.location.reload();
    } catch (e) {
      console.error('Subscription failed', e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <h2 className="text-center font-bold text-3xl my-3">Upgrade With Monthly Plan</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
        {/* FREE PLAN */}
        <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
          <div className="text-center">
            <h2 className="text-lg font-medium text-gray-900">Free</h2>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">0$</strong>
              <span className="text-sm font-medium text-gray-700">/month</span>
            </p>
          </div>
          <ul className="mt-6 space-y-2 text-gray-700">
            <li>✔ 10,000 Words/Month</li>
            <li>✔ 10+ Content Templates</li>
            <li>✔ Unlimited Download & Copy</li>
            <li>✔ 1 Month of History</li>
          </ul>
        </div>

        {/* PAID PLAN */}
        <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
          <div className="text-center">
            <h2 className="text-lg font-medium text-gray-900">Monthly</h2>
            <p className="mt-2 sm:mt-4">
              <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">9.99$</strong>
              <span className="text-sm font-medium text-gray-700">/month</span>
            </p>
          </div>
          <ul className="mt-6 space-y-2 text-gray-700">
            <li>✔ 1,00,000 Words/Month</li>
            <li>✔ 50+ Template Access</li>
            <li>✔ Unlimited Download & Copy</li>
            <li>✔ 1 Year of History</li>
          </ul>
          <Button
            disabled={loading || userSubscription}
            onClick={CreateSubscription}
            className="w-full rounded-full mt-5 p-6"
            variant="outline"
          >
            {loading && <Loader2Icon className="animate-spin mr-2" />}
            {userSubscription ? 'Active Plan' : 'Get Started'}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Billing;
