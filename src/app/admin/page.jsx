import { Suspense } from 'react';
import { auth } from '@/lib/auth';
import styles from "./admin.module.css";
import Loading from '../loading';
import AdminPosts from '@/components/adminPosts/adminPosts';
import AdminPostForm from '@/components/adminPostForm/adminPostForm';
import AdminUsers from '@/components/adminUsers/adminUsers';
import AdminUserForm from '@/components/adminUserForm/adminUserForm';

const AdminPage = async () => {
    const session = await auth();

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Suspense fallback={<Loading />}>
                        <AdminPosts />
                    </Suspense>
                </div>
                <div className={styles.col}>
                    <AdminPostForm userId={session.user.id} />
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.col}>
                    <Suspense fallback={<Loading />}>
                        <AdminUsers />
                    </Suspense>
                </div>
                <div className={styles.col}>
                    <AdminUserForm />
                </div>
            </div>
        </div>
    )
}

export default AdminPage