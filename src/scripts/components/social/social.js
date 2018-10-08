import socialLikes from 'social-likes-next';
import 'social-likes-next/lib/social-likes_flat.css';  // Flat skin
import './social.less';

const wrappers = document.querySelectorAll('.social-likes-wrapper');
const options = {};

for (const wrapper of wrappers) {
    socialLikes(wrapper, options);
}
