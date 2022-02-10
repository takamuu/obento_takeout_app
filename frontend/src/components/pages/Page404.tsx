import { memo, VFC } from 'react';
import { Link } from 'react-router-dom';

export const Page404: VFC = memo(() => {
  return (
    <div>
      <h1>Page404:ページが見つかりません</h1>
      <Link to="/">トップページへ戻る</Link>
    </div>
  );
});
