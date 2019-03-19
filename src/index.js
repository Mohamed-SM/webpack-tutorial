import '@fortawesome/fontawesome-free/css/all.css';
import './styles/style.css'

import './scripts/form'
import * as ui from './scripts/ui';
import { ItemList } from './scripts/itemList';

ItemList.items = [ "task 1", "task 2", "task 3", "task 4", "task 5" ];
ui.updatetheView();
