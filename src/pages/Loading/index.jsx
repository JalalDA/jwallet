import { useState } from 'react';
import styles from './Loading.module.css'

export default function LoadingSpinner() {
    const [isLoading, setIsLoading] = useState(false)
  return (
    <div className={styles.spinner_container}>
      <div className={styles.loading_spinner}>
      </div>
      <button onClick={setIsLoading(true)}>Show Load</button>
    </div>
  );
} 